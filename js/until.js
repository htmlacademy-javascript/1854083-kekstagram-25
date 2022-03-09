const getRandomIntNumber = function (a, b) {
  if (a > b) {
    throw new Error('Значение a должно быть меньше, b');
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const checkMaxLength = (string, maxLength) => string.length <= maxLength;

export {getRandomIntNumber, checkMaxLength};
