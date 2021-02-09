import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, TitleInput, BodyInput} from './styles';
import {set} from 'react-native-reanimated';

export default () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={(t) => setTitle(t)}
        placeholder="Digite o título da anotação"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={(t) => setBody(t)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
    </Container>
  );
};
