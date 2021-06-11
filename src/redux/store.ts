import { createStore } from "redux";
import { taskReducer } from "./reducers/taskReducer";

export const store = createStore(taskReducer);