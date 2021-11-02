import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Notification from "./Notification";

const TaskMessage = () => {
  const [notifProperties, setNotifProperties] = useState({});
  const putTaskState = useSelector((state) => state.taskPutReducer.state);

  useEffect(() => {
    if (!putTaskState) {
      return;
    }
    let notifProp = {};
    switch (putTaskState) {
      case "LOADING":
        notifProp = {
          type: "info",
          title: "Sending...",
          message: "Request is being sent",
          duration: 1000,
        };
        break;
      case "SUCCESS":
        notifProp = {
          type: "success",
          title: "Success! :)",
          message: "Request sent successfully",
        };
        break;
      default:
        //ERROR
        notifProp = {
          type: "danger",
          title: "Failure... :(",
          message: "Failure while sending request",
        };
    }

    setNotifProperties(notifProp);
  }, [putTaskState]);

  return <Notification notifProperties={notifProperties} />;
};

export default TaskMessage;
