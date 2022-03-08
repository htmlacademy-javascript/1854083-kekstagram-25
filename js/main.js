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
  'Ева',
  'Артем',
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
  'Варвара',
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

const PHOTOS_COUNT = 25;

const RANDOM_AVATAR_FROM = 1;

const RANDOM_AVATAR_TO = 6;

const MIN_QUANTITY_LIKES = 15;

const MAX_QUANTITY_LIKES = 200;

const COMMENTS_COUNT = 20;

const getRandomIntNumber = function (a, b) {
  if (a > b) {
    throw new Error('Значение a должно быть меньше, b');
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const checkMaxLength = (string, maxLength) => string.length <= maxLength;

const getRandomElement = (elements) => elements[getRandomIntNumber(0, elements.length - 1)];

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

const photos = Array.from({length: PHOTOS_COUNT}, (_, index) => createDescriptionPhoto(index));
