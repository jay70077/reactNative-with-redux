const initialState = {
  age: 0,
};

const reducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === 'add') {
    newState.age += action.value;
  }
  if (action.type === 'minus') {
    newState.age -= action.value;
  }
  return newState;
};
export default reducer;
