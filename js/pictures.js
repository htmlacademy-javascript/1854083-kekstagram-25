import {generatePhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = generatePhotos();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach((picture) => {

  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector ('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarListFragment.appendChild(pictureElement);
  picturesContainer.appendChild(similarListFragment);
});

export {similarListFragment};
