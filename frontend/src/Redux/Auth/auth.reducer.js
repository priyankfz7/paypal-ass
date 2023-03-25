import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } from "./auth.actiontypes";

const initialState = {
  token: localStorage.getItem("token") || "",
  loading: false,
  error: false,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_LOADING: {
      return { ...state, loading: true };
    }
    case USER_LOGIN_SUCCESS: {
      return { ...state, token: payload.token, loading: false };
    }
    default: {
      return state;
    }
  }
};
