const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_REGULAR_EXPRESSION = /^#[A-Za-zА-Яа-яёЁ0-9]{1,20}$/;

const imgUpLoadForm = document.querySelector('.img-upload__form');
const upLoadPhoto = document.querySelector('#upload-file');
const inputFile = document.querySelector('.img-upload__input');
const imgUpLoadOverlay = document.querySelector('.img-upload__overlay');
const imgUpLoadCancel = document.querySelector('#upload-cancel');

const fieldHashtags = document.querySelector('.text__hashtags');
const fieldDescription = document.querySelector('.text__description');


const escapeKey = (evt) => evt.key === 'Escape';

//отключение закрытия формы по ESC при фокусе на хэштеге или на комментарии
const onFormEscKey = (evt) => {
  if(escapeKey(evt) && document.activeElement !== fieldHashtags && document.activeElement !== fieldDescription) {
    evt.preventDefault();
    offLoadNewPhoto();
  }
};

//Функция добавления обработчика закрытие формы по ESC
const addUserFormEscapeKey = () => {
  document.addEventListener('keydown', onFormEscKey);
};

//Функция удаления обработчика закрытие формы по ESC
const removeUserFormEscapeKey = () => {
  document.removeEventListener('keydown', onFormEscKey);
};

function onLoadNewPhoto () {
  imgUpLoadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addUserFormEscapeKey();
}

function offLoadNewPhoto () {
  imgUpLoadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeUserFormEscapeKey();
  inputFile.value = '';
  fieldHashtags.value = '';
  fieldDescription.value = '';
}

const pristine = new Pristine(imgUpLoadForm, {
  classTo: 'img-upload__form',
  errorClass: 'img-upload__form--invalid',
  successClass: 'img-upload__form--valid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
  errorTextTag: 'div',
});

function validateHashtags (value) {
  const hashtags = value.trim().toLowerCase().split(' ');
  return hashtags.length <= HASHTAG_MAX_COUNT && hashtags.every((hashtag) => HASHTAG_REGULAR_EXPRESSION.test(hashtag));
}

const getNoRepeatString = (string) => {
  const stringValue = string.replace(/ +/g, ' ').trim().toLocaleLowerCase();
  return stringValue.split(' ');
};

const hashtagsDontRepeat = () => getNoRepeatString(fieldHashtags.value).length === new Set((getNoRepeatString(fieldHashtags.value))).size;

const acquireWordInArray = (arr) => {
  let word = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i].length > word) {
      word = arr[i].length;
    }
  }
  return word;
};

const getHashtagsMaxLength = () => acquireWordInArray((getNoRepeatString(fieldHashtags.value))) <= HASHTAG_MAX_LENGTH;

pristine.addValidator(
  fieldHashtags,
  validateHashtags,
  'От 2 до строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'
);

pristine.addValidator(
  fieldHashtags,
  hashtagsDontRepeat,
  'ХэшТэги не должны повторяться'
);

pristine.addValidator(
  fieldHashtags,
  getHashtagsMaxLength,
  'максимальная длина одного хэш-тега 20 символов, включая решётку'
);


imgUpLoadForm.addEventListener('submit',(evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


upLoadPhoto.addEventListener('change', onLoadNewPhoto);
imgUpLoadCancel.addEventListener('click', offLoadNewPhoto);
