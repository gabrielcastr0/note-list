//local em que as listas serão salvas
const initialState = {
  list: [{title: 'Primeira Nota', body: 'Testando...'}],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      break;
  }

  return state;
};
