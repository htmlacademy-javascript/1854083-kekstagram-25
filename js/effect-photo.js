const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const uploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const effectStyleNone = document.querySelector('#effect-none');
let filterName = 'effects__preview--none';

const DEFAULT_VALUE = 100;
effectLevelValue.value = DEFAULT_VALUE;


const FILTERS_CONFIG = {
  chrome:  {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },
  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    style: 'sepia',
    unit: '',
  },
  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    },
    style: 'invert',
    unit: '',
  },
  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    style: 'blur',
    unit: '',
  },
  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    style: 'brightness',
    unit: '',
  }
};

noUiSlider.create(effectLevelSlider, {

  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

let effectName = 'none';

effectList.addEventListener('change', (evt) => {
  filterName = `effects__preview--${evt.target.value}`;

  effectName = evt.target.value;
  if (evt.target.classList.contains('effects__radio') && effectName !== 'none') {
    uploadPreviewImage.classList.add(`effects__preview--${effectName}`);
    effectLevelSlider.noUiSlider.updateOptions(FILTERS_CONFIG[effectName]);
    uploadEffectLevel.hidden = false;
  } else {
    uploadPreviewImage.style.filter = 'none';
    uploadEffectLevel.hidden = true;
  }
});

effectLevelSlider.noUiSlider.on('update', () => {
  if(effectName !== 'none') {
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();

    switch (filterName) {
      case 'effects__preview--chrome':
        uploadPreviewImage.style.filter = `grayscale(${effectLevelValue.value})`;
        break;
      case 'effects__preview--sepia':
        uploadPreviewImage.style.filter = `sepia(${effectLevelValue.value})`;
        break;
      case 'effects__preview--marvin':
        uploadPreviewImage.style.filter = `invert(${effectLevelValue.value}%)`;
        break;
      case 'effects__preview--phobos':
        uploadPreviewImage.style.filter = `blur(${effectLevelValue.value}px)`;
        break;
      case 'effects__preview--heat':
        uploadPreviewImage.style.filter = `brightness(${effectLevelValue.value})`;
        break;
    }
  }
});

const defaultEffects = () => {
  uploadPreviewImage.removeAttribute('style');
  uploadEffectLevel.hidden = true;
  effectStyleNone.checked = true;
};

export {defaultEffects};
