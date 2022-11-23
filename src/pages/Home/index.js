import React, { useContext, useState, useEffect } from 'react';
import { Alert, Text, Platform, TouchableOpacity, View } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns';

import HistoricoListBalance from '../../components/HistoricoListBalance';
import DatePicker from '../../components/DatePicker';
import { AuthContext } from '../../contexts/auth'
import SlideCarteiras from '../../components/SlideCarteiras'

import { Background, Container, Nome, Saldo, Title, List, Area, TitleBalance, TitleCard, BoasVindas } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Home() {
  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const [newDate, setNewDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)


  const { user } = useContext(AuthContext)
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo)
      })

      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(15).on('value', (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              descricao: childItem.val().descricao,
              valor: childItem.val().valor,
              date: childItem.val().date
            };

            setHistorico(oldArray => [...oldArray, list].reverse())
          })
        })
    }

    loadList()
  }, [newDate])


  function handleDelete(data) {

    // Pegando data do item
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`)
    console.log(dateItem);

    //Pegando data de hoje
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`)
    console.log(dateHoje);



    if (isBefore(dateItem, dateHoje)) {
      // Se a data do registro ja passou, vai entrar aqui
      alert("Voce não pode excluir um registro antigo!")
      return;
    }

    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )

  }


  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico')
      .child(uid).child(data.key).remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

        await firebase.database().ref('users').child(uid)
          .child('saldo').set(saldoAtual);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleShowPicker() {
    setShowCalendar(true)
  }

  function handleClose() {
    setShowCalendar(false)
  }

  const onChange = (date) => {
    setShowCalendar(Platform.OS === 'ios')
    setNewDate(date)
  }



  return (
    <Background>
      <Container>
        <BoasVindas>
        <Text style={{color:'#fff'}}>Olá, </Text>
        <Nome>{user && user.nome}</Nome>
        </BoasVindas>
        <View style={{ padding: 20 }}>
          <TitleBalance>Balance</TitleBalance>
          <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
        </View>
      </Container>

      <TitleCard>
        Carteiras
      </TitleCard>

      <View>
        <SlideCarteiras />
      </View>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name='event' size={30} color="#FFF" />
        </TouchableOpacity>
        <Title>Ultimas movimentaçoes</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoListBalance data={item} deleteItem={handleDelete} />)}
      />

      {showCalendar && (
        <DatePicker
          onClose={handleClose}
          date={newDate}
          onChange={onChange}
        />
      )}



    </Background>
  );
}