import {generatePhotos} from './data.js';
import {renderPhotos} from './pictures.js';
import './user-form.js';
import './scale-photo.js';

const PHOTOS_COUNT = 25;

const photos = generatePhotos(PHOTOS_COUNT);

renderPhotos(photos);
