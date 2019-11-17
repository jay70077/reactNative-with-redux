const initialState = {
  age: 0,
  history: [],
};

const reducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'add') {
    newState.age += action.value;
    newState.history = newState.history.concat({
      age: (newState.age += action.value),
      id:  Math.random()
    });
  }
  if (action.type === 'minus') {
    newState.age -= action.value;
    newState.history = newState.history.concat({
      age: (newState.age -= action.value),
      id: Math.random(),
    });
  }
  if (action.type === 'del') {
    newState.history = newState.history.filter(data => {
      data.id !== action.key;
    });
  }
  return newState;
};
export default reducer;
