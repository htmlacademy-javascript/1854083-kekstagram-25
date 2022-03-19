import {generatePhotos} from './data.js';
import {renderPhotos} from './pictures.js';

const PHOTOS_COUNT = 25;

const photos = generatePhotos(PHOTOS_COUNT);

renderPhotos(photos);
