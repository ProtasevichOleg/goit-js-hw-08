import {
  throttledSaveToLocalStorage,
  loadFromLocalStorage,
  clearForm,
} from './utils/formHelpers.js';

const form = document.querySelector('.feedback-form');

const refs = {
  emailInputEl: form.querySelector('[name="email"]'),
  messageInputEl: form.querySelector('[name="message"]'),
  localStorageKey: 'feedback-form-state',
};

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const state = {
    email: refs.emailInputEl.value,
    message: refs.messageInputEl.value,
  };

  console.log(state);

  clearForm(refs);
  localStorage.removeItem(refs.localStorageKey);
});

loadFromLocalStorage(refs);

refs.emailInputEl.addEventListener('input', () => {
  throttledSaveToLocalStorage(refs);
});

refs.messageInputEl.addEventListener('input', () => {
  throttledSaveToLocalStorage(refs);
});
