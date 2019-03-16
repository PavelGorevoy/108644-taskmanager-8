import {task} from './data.js';
import {Task} from './task.js';
import {TaskEdit} from './task-edit.js';

const transfer = (oldTask) => {
  let newTask = oldTask instanceof Task ? new TaskEdit(task()) : new Task(task());

  newTask._title = oldTask._title;
  newTask._color = oldTask._color;
  newTask._dueDate = oldTask._dueDate;
  newTask._tags = oldTask._tags;
  newTask._picture = oldTask._picture;
  newTask._repeatingDays = oldTask._repeatingDays;
  newTask._state.isFavorite = oldTask._state.isFavorite;
  return newTask;
};

export {transfer};
