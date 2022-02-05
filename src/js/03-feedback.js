
import throttle from 'lodash.throttle';


const LOCAL_STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


if(localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
  console.log('local storage');
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message }
  } = evt.currentTarget;

console.log("email", email);
console.log("message", message);
console.log("evt.currentTarget", evt.currentTarget);
console.log("evt.currentTarget.value", evt.currentTarget.value);

  // console.log("send form");
  // evt.currentTarget.reset();
  // localStorage.removeItem(LOCAL_STORAGE_KEY);

 // localStorage.setItem(LOCAL_STORAGE_KEY, values);
}


function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

populateTextarea();