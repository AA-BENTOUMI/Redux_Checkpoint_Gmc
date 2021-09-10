import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  STATUS_TASK,
} from "../constants/task";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const updateTask = (id, description) => {
  return {
    type: UPDATE_TASK,
    payload: { id, description },
  };
};

export const statuTask = (id) => {
  return {
    type: STATUS_TASK,
    payload: id,
  };
};
