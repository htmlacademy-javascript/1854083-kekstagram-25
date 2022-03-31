const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_REGULAR_EXPRESSION = /^#[A-Za-zA-Яа-яЁё0-9]{1.19}$/;
const ESC = 'Escape';

const imgUpLoadForm = document.querySelector('.img-upload__form');
const upLoadPhoto = document.querySelector('#upload-file');
const imgUpLoadOverlay = document.querySelector('.img-upload__overlay');
const imgUpLoadCancel = document.querySelector('#upload-cancel');

const fieldHashtags = document.querySelector('.text__hashtags');
const fieldComment = document.querySelector('.text__description');

const onLoadNewPhoto = () => {
  imgUpLoadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeyDown);
  imgUpLoadCancel.addEventListener('click', closeUpLoadForm);
  fieldHashtags.addEventListener('input', onHashTagsInput);
  fieldComment.addEventListener('input', onDescrpiptionInput);
  imgUpLoadForm.addEventListener('submit', onImgUpLoadSubmit);

  upLoadPhoto.addEventListener('change', onLoadNewPhoto);
};

const offLoadNewPhoto = () => {
  imgUpLoadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeyDown);
  imgUpLoadCancel.removeEventListener('click', closeUpLoadForm);
  fieldHashtags.removeEventListener('input', onHashTagsInput);
  fieldComment.removeEventListener('input', onDescrpiptionInput);
  imgUpLoadForm.removeEventListener('submit', onImgUpLoadSubmit);
};

const orientClose = function(element) {
  return element !== document.activeElement;
};

const onClickEsc = function(evt) {
  if(evt.key === 'Ecs' && orientClose(fieldComment)) {
    evt.preventDefault();
    offLoadNewPhoto();
  }
};

const validityHashtags = function () {
  const hashtags = fieldHashtags.value.trim().toLowerCase().split(' ');

  for (const i = 0; i < hashtags.length; i++) {
    if (hashtags[i] === '') {
      continue;
    } else if (hashtags[i][0] !== '#') {
      fieldHashtags.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
      fieldHashtags.reporValidity();
      return;
    } else if (hashtags[i].search(HASHTAG_REGULAR_EXPRESSION) === -1) {
      fieldHashtags.setCustomValidity('Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      fieldHashtags.reporValidity();
      return;
    } else if (hashtags[i].length <= 1) {
      fieldHashtags.setCustomValidity('Хеш-тег не может состоять только из одной решётки');
      fieldHashtags.reporValidity();
      return;
    } else if (hashtags[i].length > HASHTAG_MAX_LENGTH) {
      fieldHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
      fieldHashtags.reporValidity();
      return;
    } else if (hashtags.length > HASHTAG_MAX_COUNT) {
      fieldHashtags.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
      fieldHashtags.reporValidity();
      return;
    } else if (hashtags.indexOF('#', 1) >= 1) {
      fieldHashtags.setCustomValidity('Хэш-теги разделяются пробелами');
      fieldHashtags.reporValidity();
      return;
    } else if (i !== hashtags.indexOf(hashtags[i]) || i !== hashtags.lastIndexOf(hashtags[i])) {
      fieldHashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      fieldHashtags.reporValidity();
      return;
    } else {
      fieldHashtags.setCustomValidity('');
    }
  }
};

fieldHashtags.addEventListener('input', validityHashtags);

const onKeyDown = function (evt) {
  if (evt.key === ESC) {
    evt.stopPropagation();
  }
};

