import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';

import {useSelector} from 'react-redux';

import NoteItem from '../../components/NoteItem';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  //definindo propriedades do header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImage
            source={require('../../assets/more.png')}></AddButtonImage>
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    //navega para a tela de edição com o index da nota
    navigation.navigate('EditNote', {
      key: index,
    });
  };

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem
              data={item}
              index={index}
              onPress={handleNotePress}></NoteItem>
          )}
          keyExtractor={(item, index) => index.toString()}></NotesList>
      )}
      {list.length == 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
