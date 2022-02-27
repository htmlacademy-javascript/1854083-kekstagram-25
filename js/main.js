const getRandomIntNumber = function (from, to) {
  if (from < to) {
    throw new Error('Значение from должно быть меньше, to');
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
};

function checkMaxLength (string , maxLength) {

  return string.length <= maxLength;
}

const DESCRIPTION = [
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

const GENERATE_PHOTO = 25;

const getRandomIntNumber = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const creatDescripComments = () => {
  const comments = [];
   comments[] = {
    id: getRandomIntNumber(1, 25)
    avatar: img/avatar-{ getRandomIntNumber(1, 6) }.svg,
    message: COMMENTS[getRandomIntNumber(0, COMMENTS.length -1)],
    name: NAMES[getRandomIntNumber(0, NAMES.length - 1)],
  };
  return comments;
};

const producePhotos = Array.from({GENERATE_PHOTO: 25}, creatDescripComments);

