import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import HistoricoListBalance from '../../components/HistoricoListBalance';

import { AuthContext } from '../../contexts/auth'

import { Background, Container, Nome, Saldo, Title, List } from './styles'

export default function Home() {
  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: 1200 },
    { key: '2', tipo: 'despesa', valor: 200 },
    { key: '3', tipo: 'receita', valor: 40 },
    { key: '4', tipo: 'receita', valor: 100 },
    { key: '5', tipo: 'despesa', valor: 2000 },
    { key: '6', tipo: 'receita', valor: 100 },
    { key: '7', tipo: 'despesa', valor: 2000 },
    { key: '8', tipo: 'receita', valor: 100 },
    { key: '9', tipo: 'despesa', valor: 2000 },
  ])
  const { user } = useContext(AuthContext)

  return (
    <Background>
      <Container>
        <Nome>{user.nome}</Nome>
        <Saldo>R$123.00</Saldo>
      </Container>

      <Title>Ultimas movimentaçoes</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoListBalance data={item} />)}
      />

    </Background>
  );
}