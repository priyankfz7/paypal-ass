import { GET_AND_UPDATE_TASKS_SUCCESS } from "./tasks.actiontypes";

const intState = {
  tasks: [],
  loading: false,
  error: false,
};
export const taskReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case GET_AND_UPDATE_TASKS_SUCCESS: {
      return { ...state, tasks: [...payload] };
    }
    default: {
      return state;
    }
  }
};
