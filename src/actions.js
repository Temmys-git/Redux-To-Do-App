export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: { filter },
});
