//local em que as listas serão salvas
const initialState = {
  list: [{title: 'Primeira Nota', body: 'Testando...'}],
};

export default (state = initialState, action) => {
  let newList = [...state.list];
  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;

    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
        };
      }
      break;
  }

  //faz o retorno da newList substituindo a list antiga
  return {...state, list: newList};
};
