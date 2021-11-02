import { useSelector } from "react-redux";
import Card from "./Card";
import classes from "./CardList.module.css";

const getVisualResponse = (tasksData) => {
  if (tasksData.fetchState === "LOADING") {
    return <h2 className={classes.info}>Loading...</h2>;
  }
  if (tasksData.fetchState === "ERROR") {
    return (
      <h2 className={classes.info}>
        Error while retrieving data. Please, reload.
      </h2>
    );
  }
  if (tasksData.data.length === 0) {
    return <h2 className={classes.info}>No data found</h2>;
  }

  if (tasksData.filterText) {
    const filteredData = tasksData.data.filter(
      (card) =>
        card.title.includes(tasksData.filterText) ||
        card.id.startsWith(tasksData.filterText)
    );
    return (
      <>
        {filteredData.map((card, key) => {
          return <Card id={card.id} title={card.title} key={key} />;
        })}
      </>
    );
  }

  return (
    <>
      {tasksData.data.map((card, key) => {
        return <Card id={card.id} title={card.title} key={key} />;
      })}
    </>
  );
};

const CardList = () => {
  const tasksData = useSelector((state) => state.tasksDataReducer);

  return (
    <ul className={classes["cardList-wrapper"]}>
      {getVisualResponse(tasksData)}
    </ul>
  );
};

export default CardList;
