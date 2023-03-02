export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
export const formatFixed = (str) => {
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + '.')) + prev
  })
};