import {randomCount} from './util.js';

const HASHTAGS = new Set([
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `hard`,
  `work`,
  `imagination`
]);
const hashTagsCount = 3;

const getHashTags = (count) => {
  let hashTags = Array.from(HASHTAGS);
  let taskHashTags = new Set([]);
  for (let i = 0; i <= count; i++) {
    let delIndex = randomCount(hashTags.length);
    taskHashTags.add(hashTags[delIndex]);
    hashTags.splice(delIndex, 1);
  }
  return taskHashTags;
};

const getDate = () => Date.now() + (randomCount(14) - 7) * 24 * 60 * 60 * 1000;

const task = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][randomCount(3)],
  dueDate: getDate(),
  tags: getHashTags(randomCount(hashTagsCount)),
  picture: Math.random() >= 0.5 ? `//picsum.photos/100/100?r=${Math.random()}` : ``,
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
    `violet`
  ][randomCount(5)],
  repeatingDays: {
    mo: Math.random() >= 0.5,
    tu: Math.random() >= 0.5,
    we: Math.random() >= 0.5,
    th: Math.random() >= 0.5,
    fr: Math.random() >= 0.5,
    sa: Math.random() >= 0.5,
    su: Math.random() >= 0.5,
  },
  isFavorite: Math.random() >= 0.5,
  isDone: Math.random() >= 0.5
});

export {task};
