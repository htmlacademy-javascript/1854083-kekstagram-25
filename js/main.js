
const getRandomIntNumber = function (from, before) {
  if (before <= from) {
    throw new Error('Значение before должно быть меньше , чем from');
  }
  return Math.random() * (before - from + 1) + from;
};
getRandomIntNumber(1, 100);


// eslint-disable-next-line no-unused-vars
const getChecked = function (stringChecked, maxLine ) {
  if(stringChecked === maxLine) {
    return true;
  // eslint-disable-next-line no-unused-expressions
  }else {(stringChecked > maxLine) || (stringChecked < maxLine) ;}
  return false;
};
getChecked(10, 10);
