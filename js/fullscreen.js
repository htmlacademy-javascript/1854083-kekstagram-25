const ESC = 'Escape';

const pictureBig = document.querySelector('.big-picture');
const pictureLikesCount = pictureBig.querySelector('.likes-count');
const pictureCommentsCount = pictureBig.querySelector('.comments-count');
const pictureSocialComment = pictureBig.querySelector('.social__comment');
const pictureDescriptionCaption = pictureBig.querySelector ('.social__caption');
const pictureSocialCommentCount = pictureBig.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureBig.querySelector('.comments-loader');
pictureSocialCommentCount.classList.add('hidden');
pictureCommentsLoader.classList.add('hidden');


document.body.classList.add('modal-open');
pictureBig.classList.remove('hidden');

document.addEventListener(`keydown`           );
pictureBig.addEventListener(`click`,          );


const bigPictureClose = () => {

};

const clickKeyCloseBigPicture = function (evt) {
  if(evt.keyCode === ESC) {
    evt.preventDefault();
    bigPictureClose();
  }
};

const showBigPicture = (photo) => {
  document.querySelector('.big-picture').classList.add('hidden');

  pictureBig.querySelector('.big-picture__img').src = photo.url;
  pictureLikesCount.querySelector('likes-count').textContent = photo.likes;
  pictureCommentsCount.querySelector('comments-count').textContent = photo.comments.length;
  pictureDescriptionCaption.querySelector ('.social__caption').textContent = photo.description;
};
