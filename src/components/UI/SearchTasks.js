import { useDispatch } from "react-redux";
import classes from "./SearchTasks.module.css";

const SearchTasks = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "SET_TASK_FILTER",
      payload: { filterText: e.target.value },
    });
  };

  return (
    <div className={classes["search-tasks-wrapper"]}>
      <input
        type="search"
        onChange={searchHandler}
        title="Search by title or id number"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchTasks;
