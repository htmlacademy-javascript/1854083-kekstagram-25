const ESC = 'Escape';
const SHOW_MORE_COMMENTS = 5;
let variable = 0;
let currentComments = [];

const pictureBig = document.querySelector('.big-picture');
const pictureSocialCommentCount = pictureBig.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureBig.querySelector('.comments-loader');
const pictureBigComments = pictureBig.querySelector('.social__comments');
const pictureBigComment = pictureBigComments.querySelector('.social__comment');
const closeButton = pictureBig.querySelector('.big-picture__cancel');

function onEscKeyDown(evt) {
  if (evt.key === ESC) {
    hideBigPicture();
  }
}

function hideBigPicture () {
  document.body.classList.remove('modal-open');
  pictureBig.classList.add('hidden');
  pictureSocialCommentCount.classList.remove('hidden');
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
  variable = 0;
  currentComments = photo.comments;

  document.body.classList.add('modal-open');
  pictureBig.classList.remove('hidden');
  pictureSocialCommentCount.classList.add('hidden');

  pictureBig.querySelector('.big-picture__img img').src = photo.url;
  pictureBig.querySelector('.likes-count').textContent = photo.likes;
  pictureBig.querySelector('.comments-count').textContent = photo.comments.length;
  pictureBig.querySelector ('.social__caption').textContent = photo.description;
  pictureBigComments.innerHTML = '';
  renderComments(pictureBigComments, photo.comments);
};

document.addEventListener('keydown', onEscKeyDown);


const loadComments = function (comments) {
  const loaderCommetns = comments.slice(0, SHOW_MORE_COMMENTS);
  const commentsFragment = renderComments(loaderCommetns);
  pictureBigComments.appendChild(commentsFragment);
};

const getCurrentCommentCount = function (comments) {
  return comments ? comments.children.length : 0;
};

const onLoaderClickComments = function () {
  loadComments(currentComments);
  pictureSocialCommentCount.firstChild.textContent = getCurrentCommentCount(pictureBigComments) + 'из';

  if (currentComments.length === 0) {
    pictureCommentsLoader.classList.add('hidden');
    pictureCommentsLoader.removeEventListener('click', onLoaderClickComments);
  }
};


// const getMoreComments = function () {
//   return SHOW_MORE_COMMENTS * variable;
// };

// const getNextComments = function () {
//   variable += 1;
//   return currentComments.slice(0, getMoreComments());
// };

// const lastPage = function () {
//   return currentComments.length <= getMoreComments();
// };
