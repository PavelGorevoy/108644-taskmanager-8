'use strict';

(function () {

  const MAIN_FILTER = document.querySelector(`.main__filter`);
  const MIN_FILTER_COUNT = 0;
  const MAX_FILTER_COUNT = 99;
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

  const randomCount = function (max, min) {
    if (arguments.length === 1) {
      return Math.floor(Math.random() * max);
    }
    return Math.floor(Math.random() * (max - min) + min);
  };

  const renderFilter = (filter) => `<input
      type="radio"
      id="filter__${filter}"
      class="filter__input visually-hidden"
      name="filter"
    />
    <label for="filter__${filter}" class="filter__label">
     ${filter} <span class="filter__${filter}-count">${randomCount(MAX_FILTER_COUNT, MIN_FILTER_COUNT)}</span></label
    >`;

  const checkedFilter = function (fragment, filter) {
    fragment.getElementById(`filter__${filter}`).checked = true;
  };

  const renderMainFilters = function (filters) {
    let template = document.createElement(`template`);
    let fragment = document.createDocumentFragment();
    filters.forEach(function (item) {
      template.insertAdjacentHTML(`beforeend`, renderFilter(item));
      for (let index = 0; index < template.children.length;) {
        fragment.appendChild(template.children[index]);
      }
    });
    checkedFilter(fragment, FILTER_CHECKED);
    MAIN_FILTER.appendChild(fragment);
  };

  renderMainFilters(FILTER_TITLES);

})();
