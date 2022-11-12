import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { getStatusBarHeight} from 'react-native-status-bar-height'

import {Container, Titulo, Nome, BotaoSujeito, BotaoText} from './src/styles'

export default function App() {
 return (
   <Container>

    <StatusBar backgroundColor='#000000' barStyle="dark-content"/>

    <Titulo>Eu</Titulo>
    <Nome>Ola Fabricio</Nome>

    <BotaoSujeito onPress={() => alert("CLICOU")}>
      <BotaoText>Entrar</BotaoText>
    </BotaoSujeito>

   </Container>
  );
}

