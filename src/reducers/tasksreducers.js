import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from '../actions';

const initialState = {
  tasks: [],
  filter: 'all',
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        description: action.payload.description,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default tasksReducer;
