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

const USERS_PHOTOS = 25;

const MIN_NUMBER_ID_DESCRIPTION = 1;

const MAX_NUMBER_ID_DESCRIPTION = 25;

const RANDOM_AVATAR_FROM = 1;

const RANDOM_AVATAR_TO = 6;

const ADDRESS_IMAGE_FROM = 1;

const ADDRESS_IMAGE_TO = 25;

const MIN_QUANTITY_LIKES = 15;

const MAX_QUANTITY_LIKES = 200;

const getRandomIntNumber = function (a, b) {
  if (a < b) {
    throw new Error('Значение a должно быть меньше, b');
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
};

function checkMaxLength (string , maxLength) {
  return string.length <= maxLength;
}

const getRandomElement = (elements) => {
  return elements[getRandomElement(0, elements.length - 1)];
};

const generateComments = () => {
  return {
  id: getRandomIntNumber(MIN_NUMBER_ID_DESCRIPTION, MAX_NUMBER_ID_DESCRIPTION),
  avatar: `img/avatar(${getRandomIntNumber(RANDOM_AVATAR_FROM, RANDOM_AVATAR_TO)}).svg`,
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES),
};
}
 
const createDescriptionPhoto = (id, url) => {
  return {
    id: getRandomIntNumber(MIN_NUMBER_ID_DESCRIPTION, MAX_NUMBER_ID_DESCRIPTION),
    url: `photos/(${ getRandomIntNumber(ADDRESS_IMAGE_FROM, ADDRESS_IMAGE_TO)}).jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomIntNumber(MIN_QUANTITY_LIKES, MAX_QUANTITY_LIKES),
    comment: 
  };
};



const photos = Array.from({length: USERS_PHOTOS}, (_, index) => createDescriptionPhoto(index));

console.log(photos);
