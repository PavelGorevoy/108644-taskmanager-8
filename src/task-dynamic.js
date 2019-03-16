const edit = (task, editTask, tasksContainer) => {
  editTask.render();
  tasksContainer.replaceChild(editTask.element, task.element);
  task.unrender();
};

const submit = (task, editTask, tasksContainer) => {
  task.render();
  tasksContainer.replaceChild(task.element, editTask.element);
  editTask.unrender();
};

export {edit, submit};
