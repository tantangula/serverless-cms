export const GET_NUMBER = 'GET_NUMBER';

export const getNumber = () => {
  console.log('getting number');
  const number = Math.random();

  return {
    type: GET_NUMBER,
    number,
  };
};