import ReactDOM from "react-dom";
import classes from "./Popup.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCancelPopup}></div>;
};

const PopupContent = (props) => {
  return (
    <div className={classes["popup-content"]}>
      <h3>
        {`Have you completed the Task #${props.selectedCardInfo.id}: 
        ${props.selectedCardInfo.title}?`}
      </h3>
      <div className={classes["button-actions"]}>
        <button onClick={props.onCancelPopup}>Cancel</button>
        <button onClick={props.onDonePopup}>Done</button>
      </div>
    </div>
  );
};

const Popup = () => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.selectCardReducer);

  const cancelPopupHandler = () => {
    dispatch({ type: "CANCEL_POPUP" });
  };

  const donePopupHandler = async () => {
    dispatch({ type: "SENDING_PUT_REQUEST" });

    let response = {};
    try {
      response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/task/${selectedCard.id}`,
        { isDone: true }
      );
    } catch (e) {
      dispatch({ type: "ERROR_PUT_REQUEST" });
    }

    if (response.status === 200) {
      dispatch({ type: "SUCCESS_PUT_REQUEST" });
    }

    cancelPopupHandler();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancelPopup={cancelPopupHandler} />,
        document.getElementById("back-popup")
      )}
      {ReactDOM.createPortal(
        <div className={classes["popup-content-wrapper"]}>
          <PopupContent
            selectedCardInfo={selectedCard}
            onCancelPopup={cancelPopupHandler}
            onDonePopup={donePopupHandler}
          />
        </div>,
        document.getElementById("popup")
      )}
    </>
  );
};

export default Popup;
