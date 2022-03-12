const getRandomIntNumber = function (a, b) {
  if (a > b) {
    throw new Error('Значение a должно быть меньше, b');
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const checkMaxLength = (string, maxLength) => string.length <= maxLength;

const COMMENTS_COUNT = 20;

const getRandomElement = (elements) => elements[getRandomIntNumber(0, elements.length - 1)];

export {getRandomIntNumber, checkMaxLength, COMMENTS_COUNT, getRandomElement};
