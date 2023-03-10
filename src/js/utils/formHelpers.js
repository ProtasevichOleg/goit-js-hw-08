import throttle from 'lodash.throttle';

export const saveToLocalStorage = ({
  emailInputEl,
  messageInputEl,
  localStorageKey,
}) => {
  const state = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

export const throttledSaveToLocalStorage = throttle(refs => {
  saveToLocalStorage(refs);
}, 500);

export const loadFromLocalStorage = ({
  emailInputEl,
  messageInputEl,
  localStorageKey,
}) => {
  const stateString = localStorage.getItem(localStorageKey);

  if (!stateString) return;

  const { email, message } = JSON.parse(stateString);

  emailInputEl.value = email;
  messageInputEl.value = message;
};

export const clearForm = ({ emailInputEl, messageInputEl }) => {
  emailInputEl.value = '';
  messageInputEl.value = '';
};
