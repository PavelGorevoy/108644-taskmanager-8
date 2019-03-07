import {randomCount} from './util.js';

const getTask = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][randomCount(3)],
  dueDate: Date.now() + 1 + randomCount(7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `hard`,
    `work`,
    `imagination`
  ]),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
    `violet`
  ],
  repeatingDays: {
    'Mo': Math.random() >= 0.5,
    'Tu': Math.random() >= 0.5,
    'We': Math.random() >= 0.5,
    'Th': Math.random() >= 0.5,
    'Fr': Math.random() >= 0.5,
    'Sa': Math.random() >= 0.5,
    'Su': Math.random() >= 0.5,
  },
  isFavorite: Math.random() >= 0.5,
  isDone: Math.random() >= 0.5
});

export {getTask};
