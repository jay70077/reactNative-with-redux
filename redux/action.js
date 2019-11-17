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
export const del = id => {
  return {
    type: 'delete',
    key: id,
  };
};
