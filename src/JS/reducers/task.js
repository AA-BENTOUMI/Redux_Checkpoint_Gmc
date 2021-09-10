import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  STATUS_TASK,
} from "../constants/task";

const initialState = {
  tasks: [{ id: Math.random(), description: "first task", status: false }],
  show: true,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, description: action.payload.description }
            : el
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, status: !el.status } : el
        ),
      };
    default:
      return state;
  }
};
export default taskReducer;
