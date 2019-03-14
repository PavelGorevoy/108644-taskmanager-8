const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.insertAdjacentHTML(`beforeend`, template);
  return newElement.firstChild;
};

export {createElement};
