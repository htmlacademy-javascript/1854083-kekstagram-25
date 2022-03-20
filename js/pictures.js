const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (pictures) => {
  const similarListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {

    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector ('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    similarListFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(similarListFragment);
};

export {renderPhotos};
