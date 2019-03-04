import {randomCount} from './util.js';

const MAX_FILTER_COUNT = 99;

export default (filter) => `<input
    type="radio"
    id="filter__${filter}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__${filter}" class="filter__label">
   ${filter} <span class="filter__${filter}-count">${randomCount(MAX_FILTER_COUNT)}</span></label
  >`;
