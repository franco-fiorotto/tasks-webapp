import { store } from "react-notifications-component";
import ReactNotification from "react-notifications-component";
import { useEffect } from "react";

const Notification = (prop) => {
  // const notifProp = prop.notifProperties;
  useEffect(() => {
    const { title, message, type, duration } = prop.notifProperties;

    if (!message) {
      return;
    }
    debugger;

    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: duration ? duration : 2000,
      },
      dismissable: { click: true },
    });
  }, [prop.notifProperties]);

  return <ReactNotification />;
};

export default Notification;
