import {getRandomIntNumber, COMMENTS_COUNT, getRandomElement} from './util.js';

const DESCRIPTIONS = [
  'Красивый пляж',
  'Указатель',
  'Тропический остров',
  'Красивая девушка',
  'Гуляш',
  'Корвет',
  'Десерт',
  'Морс',
  'Девушка и самолет',
  'Обувница',
  'Песчаная тропинка',
  'Ауди',
  'Салат',
  'Суши и кот',
  'Теплые дутики',
  'Горы в небе',
  'Хор',
  'Ретро автомобиль',
  'Cветящиеся тапки',
  'Городские пальмы',
  'Вкусное блюдо',
  'Закат',
  'Краб',
  'Концерт',
  'Экскурсия по тропикам'
];

const NAMES = [
  'Мария',
  'Евгений',
  'Татьяна',
  'Антон',
  'Надежда',
  'Дмитрий',
  'Анна',
  'Алексей',
  'Светлана',
  'Вадим',
  'Виктория',
  'Сергей',
  'Полина',
  'Бронислав',
  'Екатерина',
  'Олег',
  'Анастасия',
  'Иван',
  'Абелия',
  'Михаил',
  'Кирилл',
  'Диана'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const RANDOM_AVATAR_FROM = 1;

const RANDOM_AVATAR_TO = 6;

const MIN_QUANTITY_LIKES = 15;

const MAX_QUANTITY_LIKES = 200;

const generateComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomIntNumber(RANDOM_AVATAR_FROM, RANDOM_AVATAR_TO)}.svg`,
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES),
});

const createDescriptionPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomIntNumber(MIN_QUANTITY_LIKES, MAX_QUANTITY_LIKES),
  comments: Array.from({length: COMMENTS_COUNT}, (_, index) => generateComment(index)),
});

const generatePhotos = (count) => Array.from({length: count}, (_, index) => createDescriptionPhoto(index + 1));

export {generatePhotos};
