const ESC = 'Escape';

const pictureBig = document.querySelector('.big-picture');
const pictureSocialCommentCount = pictureBig.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureBig.querySelector('.comments-loader');
const pictureBigComments = pictureBig.querySelector('.social__comments');
const pictureBigComment = pictureBigComments.querySelector('.social__comment');
const closeButton = pictureBig.querySelector('.big-picture__cancel');


const onEscKeyDown = (evt) => {
  if (evt.key === ESC) {
    hideBigPicture();
  }
};

function hideBigPicture () {
  document.body.classList.remove('modal-open');
  pictureBig.classList.add('hidden');
  pictureSocialCommentCount.classList.remove('hidden');
  pictureCommentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
}

closeButton.addEventListener('click', () => {
  hideBigPicture();
});

const createComment = function (comment) {

  const commentElement = pictureBigComment.cloneNode(true);
  const commentPhotoElement = commentElement.querySelector('.social__picture');
  const commentTextElement = commentElement.querySelector('.social__text');

  commentPhotoElement.src = comment.avatar;
  commentPhotoElement.alt = comment.name;
  commentTextElement.textContent = comment.message;


  return commentElement;
};

const renderComments = function(container, comments) {
  const fragment = document.createDocumentFragment();

  comments.forEach((item) => {
    fragment.appendChild(createComment(item));
  });

  container.appendChild(fragment);
};

export const showBigPicture = (photo) => {


  document.body.classList.add('modal-open');
  pictureBig.classList.remove('hidden');
  pictureSocialCommentCount.classList.add('hidden');
  pictureCommentsLoader.classList.add('hidden');

  pictureBig.querySelector('.big-picture__img img').src = photo.url;
  pictureBig.querySelector('.likes-count').textContent = photo.likes;
  pictureBig.querySelector('.comments-count').textContent = photo.comments.length;
  pictureBig.querySelector ('.social__caption').textContent = photo.description;
  pictureBigComments.innerHTML = '';
  renderComments(pictureBigComments, photo.comments);
};

document.addEventListener('keydown', onEscKeyDown);


