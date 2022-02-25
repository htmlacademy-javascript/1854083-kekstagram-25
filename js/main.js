const getRandomIntNumber = function (from, to) {
  if (to <= from) {
    throw new Error('Значение from должно быть больше , чем to');
  }
  return Math.random() * (to - from + 1) + from;
};
getRandomIntNumber(1, 100);

function checkMaxLength (string, length) {
  return string.length <= length;
}
checkMaxLength(1, 100);
