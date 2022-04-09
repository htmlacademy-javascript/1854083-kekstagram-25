const ESC = 'Escape';
const COMMENTS_COUNT = 5;

const pictureBig = document.querySelector('.big-picture');
const pictureSocialCommentCount = pictureBig.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureBig.querySelector('.comments-loader');
const pictureBigComments = pictureBig.querySelector('.social__comments');
const pictureBigComment = pictureBigComments.querySelector('.social__comment');
const closeButton = pictureBig.querySelector('.big-picture__cancel');
let commentsCountToShow;

const createComment = function (comment) {
  // pictureSocialCommentCount.innerHTML = `${commentsCountToShow} из ${currentComent.length} комментариев`;
  const commentElement = pictureBigComment.cloneNode(true);
  const commentPhotoElement = commentElement.querySelector('.social__picture');
  const commentTextElement = commentElement.querySelector('.social__text');

  commentPhotoElement.src = comment.avatar;
  commentPhotoElement.alt = comment.name;
  commentTextElement.textContent = comment.message;

  return commentElement;
};

let onPictureCommentsLoaderClick;

const renderComments = function(container, comments) {
  const fragment = document.createDocumentFragment();

  comments.slice(0, commentsCountToShow).forEach((item) => {
    fragment.appendChild(createComment(item));
    commentsCountToShow += length;
    pictureSocialCommentCount.childNodes[0].textContent = commentsCountToShow + ` из `;
    pictureBigComments.appendChild(fragment);
  });

  container.appendChild(fragment);
};

export const showBigPicture = (photo) => {
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
    pictureCommentsLoader.removeEventListener('click', onPictureCommentsLoaderClick);
  }

  closeButton.addEventListener('click', () => {
    hideBigPicture();
  });

  document.addEventListener('keydown', onEscKeyDown);

  pictureCommentsLoader.classList.remove('hidden');
  commentsCountToShow = COMMENTS_COUNT;
  document.body.classList.add('modal-open');
  pictureBig.classList.remove('hidden');
  pictureSocialCommentCount.classList.add('hidden');
  pictureSocialCommentCount.classList.remove('hidden');

  pictureBig.querySelector('.big-picture__img img').src = photo.url;
  pictureBig.querySelector('.likes-count').textContent = photo.likes;
  pictureBig.querySelector('.comments-count').textContent = photo.comments.length;
  pictureBig.querySelector ('.social__caption').textContent = photo.description;
  pictureBigComments.innerHTML = '';
  renderComments(pictureBigComments, photo.comments);

  onPictureCommentsLoaderClick = () => {
    pictureBigComments.innerHTML = '';
    commentsCountToShow += COMMENTS_COUNT;
    renderComments(pictureBigComments, photo.comments);
    if (commentsCountToShow >= photo.comments.length) {
      pictureCommentsLoader.classList.add('hidden');
    }
  };

  pictureCommentsLoader.addEventListener('click', onPictureCommentsLoaderClick);

};
