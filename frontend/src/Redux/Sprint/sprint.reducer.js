import { GET_AND_UPDATE_SPRINT } from "./sprint.action.types";

const intState = {
  sprints: [],
};

export const sprintReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case GET_AND_UPDATE_SPRINT: {
      return { ...state, sprints: [...payload] };
    }
    default: {
      return state;
    }
  }
};
