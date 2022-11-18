import React, {useState} from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Background, Input, SubmitButton, SubmitText } from './styles'
import Picker from '../../components/Picker';

export default function New() {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('receita')

 return (

  //TouchableWithoutFeedback botao sem efeito com finalidade de quando estiver focado fora do input o teclado fechar
  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
     <Background>
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input
      placeholder='Valor desejado'
      keyboardType="numeric"
      returnKeyType="next"
      onSubmitEditing={ () => Keyboard.dismiss() }
      value={valor}
      onChangeText={ (text) => setValor(text)}
      />

      <Picker onChange={setTipo} tipo={tipo}/>

      <SubmitButton>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>

    </SafeAreaView>
   </Background>
  </TouchableWithoutFeedback>
  );
}