import makeFilter from './make-filter.js';
import makeTask from './make-task.js';
import randomCount from './util.js';

const MAIN_FILTER = document.querySelector(`.main__filter`);
const BOARD_TASKS = document.querySelector(`.board__tasks`);
const MIN_CARD_COUNT = 5;
const FILTER_TITLES = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`
];
const CARD_TITLE_CLASSES = [
  `black`,
  `pink`,
  `yellow`,
  `blue`
];
const CARD_OPTION_CLASSES = [
  `card--repeat`,
  `card--deadline`
];
const CARD_TEXTS = [
  `It is example of repeating task. It marks by wave.`,
  `This is card with missing deadline`,
  `This is example of new task, you can add picture, set date and time, add tags.`,
  `Here is a card with filled data`,
  ``
];
const FILTER_CHECKED = FILTER_TITLES[0];

const checkedFilter = function (fragment, filter) {
  fragment.getElementById(`filter__${filter}`).checked = true;
};

const resetCards = function () {
  while (BOARD_TASKS.firstChild) {
    BOARD_TASKS.removeChild(BOARD_TASKS.firstChild);
  }
  renderCards(CARD_TITLE_CLASSES);
};

const onFilterClick = () => resetCards();

const switchFilter = function () {
  let filters = document.querySelectorAll(`.filter__label`);
  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener(`click`, onFilterClick);
  }
};

const renderMainFilters = function (filters) {
  let template = document.createElement(`template`);
  let fragment = document.createDocumentFragment();
  filters.forEach(function (item) {
    template.insertAdjacentHTML(`beforeend`, makeFilter(item));
    for (let j = 0; j < template.children.length;) {
      fragment.appendChild(template.children[j]);
    }
  });
  checkedFilter(fragment, FILTER_CHECKED);
  MAIN_FILTER.appendChild(fragment);
  switchFilter();
};

const renderCards = function (titles) {
  let template = document.createElement(`template`);
  let fragment = document.createDocumentFragment();
  let countCards = MIN_CARD_COUNT + randomCount(7);
  for (let i = 0; i < countCards; i++) {
    template.insertAdjacentHTML(`beforeend`, makeTask(titles[randomCount(titles.length)], CARD_OPTION_CLASSES, CARD_TEXTS));
    for (let j = 0; j < template.children.length;) {
      fragment.appendChild(template.children[j]);
    }
  }
  BOARD_TASKS.appendChild(fragment);
};

renderMainFilters(FILTER_TITLES);
renderCards(CARD_TITLE_CLASSES);
