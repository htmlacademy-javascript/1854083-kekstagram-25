const getRandomIntNumber = function (from, to) {
  if (from < to) {
    throw new Error('Значение from должно быть меньше, to');
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
};

console.log(getRandomIntNumber(1, 100));

function checkMaxLength (string , maxLength) {

  return string.length <= maxLength;
}

console.log(checkMaxLength('кекс',4));
