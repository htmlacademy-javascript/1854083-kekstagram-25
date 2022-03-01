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

const PHOTO = 25;

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

 const commentObj = (comments) => {
  
 {
  id: getRandomIntNumber(1, 25),
  avatar: 'img/avatar(getRandomIntNumber(1, 6)).svg',
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES),
  }


const creatDescriptionPhoto = () => {
  return {
  id: getRandomIntNumber(1, 25),
  url: 'photos/(getRandomIntNumber(1, 25)).jpg',
  description: getRandomElement(DESCRIPTION),
  likes: getRandomIntNumber(15, 200),
  }; 
}

const generationPhotos = Array.from({length: PHOTO}, creatDescriptionPhoto);

console.log(generationPhotos);
