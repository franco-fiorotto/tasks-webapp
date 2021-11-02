import TaskNumberSelector from "../UI/TaskNumberSelector";
import SearchTasks from "../UI/SearchTasks";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes["main-header-content"]}>
        <SearchTasks />
        <TaskNumberSelector />
      </div>
    </header>
  );
};

export default MainHeader;
