import axios from "axios";
import { USER_LOGIN_SUCCESS } from "./auth.actiontypes";
const log = async (usercred, password) => {
  let res = await axios.post(
    `http://localhost:8080/users/login`,
    {
      usercred,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  localStorage.setItem("token", res.data.token);
  return res.data.token;
};
export const signUp = (user) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:8080/users/register`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await log(user.username, user.password);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: { token: res } });
  } catch (e) {
    console.log(e);
    alert("User Already Exist or some error");
  }
};
export const login = (user) => async (dispatch) => {
  let res = await log(user.usercred, user.password);
  dispatch({ type: USER_LOGIN_SUCCESS, payload: { token: res } });
};
