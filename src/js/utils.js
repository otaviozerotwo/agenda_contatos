const setMessage = (element, text = '') => {
  element.classList.remove('loader');
  element.innerText = text;
};

export { setMessage };