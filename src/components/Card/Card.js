import { useDispatch } from "react-redux";
import classes from "./Card.module.css";

const Card = (props) => {
  const dispatch = useDispatch();

  const displayPopUpHandler = () => {
    dispatch({
      type: "SHOW_POPUP",
      payload: { id: props.id, title: props.title },
    });
  };

  return (
    <li className={classes.card} onClick={displayPopUpHandler}>
      <span>TASK {props.id}</span>
      <div className={classes.details}>
        <h3>{props.title}</h3>
      </div>
    </li>
  );
};

export default Card;
