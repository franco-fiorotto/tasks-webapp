import { combineReducers, createStore } from "redux";
import selectCardReducer from "./reducers/selectCardReducer";
import tasksNumberReducer from "./reducers/tasksNumberReducer";
import tasksDataReducer from "./reducers/tasksDataReducer";
import taskPutReducer from "./reducers/tasksPutReducer";

const rootReducer = combineReducers({
  selectCardReducer,
  tasksNumberReducer,
  tasksDataReducer,
  taskPutReducer,
});

const store = createStore(rootReducer);

export default store;
