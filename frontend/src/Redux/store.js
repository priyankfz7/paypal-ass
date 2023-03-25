import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { authReducer } from "./Auth/auth.reducer";
import thunk from "redux-thunk";
import { sprintReducer } from "./Sprint/sprint.reducer";
import { taskReducer } from "./tasks/task.reducer";

const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authManager: authReducer,
  sprintManager: sprintReducer,
  taskManager: taskReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeInhancer(applyMiddleware(thunk))
);
