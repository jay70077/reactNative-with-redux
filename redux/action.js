export const add = val => {
  return {
    type: 'add',
    value: val,
  };
};
export const minus = val => {
  return {
    type: 'minus',
    value: val,
  };
};
