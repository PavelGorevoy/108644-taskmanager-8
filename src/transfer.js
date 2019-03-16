import {task} from './data.js';
import {Task} from './task.js';
import {TaskEdit} from './task-edit.js';
import {BOARD_TASKS} from './main.js';

const exchange = (oldTask, newTask) => {
  newTask._title = oldTask._title;
  newTask._color = oldTask._color;
  newTask._dueDate = oldTask._dueDate;
  newTask._tags = oldTask._tags;
  newTask._picture = oldTask._picture;
  newTask._repeatingDays = oldTask._repeatingDays;
  newTask._state.isFavorite = oldTask._state.isFavorite;
};

const taskToEdit = (oldTask) => {
  let newTask = new TaskEdit(task());
  exchange(oldTask, newTask);
  oldTask.onEdit = () => {
    newTask.render(BOARD_TASKS);
    BOARD_TASKS.replaceChild(newTask._element, oldTask._element);
    oldTask.unrender();
  };
};

const editToTask = (oldTask) => {
  let newTask = new Task(task());
  exchange(oldTask, newTask);
  oldTask.onSubmit = () => {
    newTask.render(BOARD_TASKS);
    BOARD_TASKS.replaceChild(newTask._element, oldTask._element);
    oldTask.unrender();
  };
};

const transfer = (oldTask) => oldTask instanceof Task ? taskToEdit(oldTask) : editToTask(oldTask);

export {transfer};
