import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Text} from './styles';

export default () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Adicione uma nota',
    });
  });

  return <Container></Container>;
};
