import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Btn, Container, Text} from './styles';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Tela de Listagem!</Text>
      <Btn
        title="Ir para Tela de Edição"
        onPress={() => navigation.navigate('EditNote')}></Btn>
    </Container>
  );
};
