import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actiontypes";
const log = async (usercred, password) => {};
export const logout = () => (dispatch) => {
  localStorage.setItem("token", "");
  dispatch({ type: USER_LOGOUT });
};

export const login = (user) => async (dispatch) => {
  try {
    let res = await axios.post(
      `https://tame-lime-scallop-tutu.cyclic.app/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: { token: res.data.token } });
  } catch (e) {
    alert("some error occured");
  }
};

export const signUp = (user) => async (dispatch) => {
  try {
    await axios.post(
      `https://tame-lime-scallop-tutu.cyclic.app/users/register`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(login({ usercred: user.username, password: user.password }));
  } catch (e) {
    console.log(e);
    alert("User Already Exist or some error");
  }
};
