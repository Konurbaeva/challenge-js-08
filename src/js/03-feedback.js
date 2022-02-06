
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const store = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
  checkLocaleStorage(store);
}

function onTextareaInput(evt) {

  const {
    elements: { email, message },
  } = evt.currentTarget; 


  const values = {
    email: email.value,
    message: message.value,
  };

 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));

}

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  const formSubmitObj = {
    email: email.value,
    message: message.value,
  };

  console.log(formSubmitObj);

  evt.currentTarget.reset();
}


function checkLocaleStorage({ email, message }) {
  refs.input.value = email;
  refs.textarea.value = message;
}

