const STEP_SIZE = 25;
const MAX_SIZE = 100;
const MIN_SIZE = 25;
const DEFAULT_SIZE = 100;

const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueButton = document.querySelector('.scale__control--value');
const uploadImagePreview = document.querySelector('.img-upload__preview img');
let scale = DEFAULT_SIZE;

function setValue(value) {
  scaleValueButton.value = `${value}%`;
  uploadImagePreview.style.transform = `scale(${value / 100})`;
}

scaleControlSmallerButton.addEventListener('click', () => {
  if (scale > MIN_SIZE) {
    scale -= STEP_SIZE;
    setValue(scale);
  }
});


scaleControlBiggerButton.addEventListener('click', () => {
  if (scale < MAX_SIZE) {
    scale += STEP_SIZE;
    setValue(scale);
  }
});

const setDefault = () => {
  scale = DEFAULT_SIZE;
  setValue(scale);
};

export {setDefault, uploadImagePreview};
