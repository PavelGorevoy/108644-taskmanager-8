import makeFilter from './make-filter.js';
import {randomCount} from './util.js';
import {task} from './data.js';
import {Task} from './task.js';
import {TaskEdit} from './task-edit.js';

const MAIN_FILTER = document.querySelector(`.main__filter`);
const BOARD_TASKS = document.querySelector(`.board__tasks`);
const MIN_CARD_COUNT = 8;
const FILTER_TITLES = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`
];
const FILTER_CHECKED = FILTER_TITLES[0];

const checkedFilter = function (fragment, filter) {
  fragment.getElementById(`filter__${filter}`).checked = true;
};

const resetCards = function () {
  while (BOARD_TASKS.firstChild) {
    BOARD_TASKS.removeChild(BOARD_TASKS.firstChild);
  }
  renderCards(task);
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

const renderCards = function () {
  let template = document.createElement(`template`);
  let fragment = document.createDocumentFragment();
  let countCards = MIN_CARD_COUNT + randomCount(4);
  let cardTask = [];
  for (let i = 0; i < countCards; i++) {
    cardTask[i] = new Task(task());
    cardTask[i].render(template);
    for (let j = 0; j < template.children.length;) {
      fragment.appendChild(template.children[j]);
    }
  }
  BOARD_TASKS.appendChild(fragment);
};

renderMainFilters(FILTER_TITLES);
renderCards();
