import { useDispatch } from "react-redux";
import classes from "./TaskNumberSelector.module.css";
import config from "../../config.json";

const validOptions = JSON.parse(config.TASK_NUMBER_SELECTOR_OPTIONS);

const TaskNumberSelector = () => {
  const dispatch = useDispatch();

  const selectOptionHandler = (e) => {
    dispatch({ type: "SET_TASKS_NUMBER", payload: e.target.value });
  };

  return (
    <div className={classes["selector-wrapper"]}>
      <select
        name="select"
        onChange={selectOptionHandler}
        title="Select number of tasks"
      >
        <option hidden defaultValue>
          Tasks number
        </option>

        {validOptions.map((validOption, key) => {
          return (
            <option value={validOption} key={key}>
              {validOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default TaskNumberSelector;
