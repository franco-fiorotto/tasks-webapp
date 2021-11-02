import React, { useEffect } from "react";
import axios from "axios";
import CardList from "./components/Card/CardList";
import Layout from "./components/Layout/Layout";
import Popup from "./components/UI/Popup";
import { useSelector, useDispatch } from "react-redux";
import TaskMessage from "./components/UI/TaskMessage";
import "react-notifications-component/dist/theme.css";

function App() {
  const dispatch = useDispatch();
  const tasksNumber = useSelector((state) => state.tasksNumberReducer.number);
  const showPopup = useSelector((state) => state.selectCardReducer.showPopup);

  useEffect(() => {
    const fetchTitles = async () => {
      dispatch({ type: "SET_TASK_LOADING" });
      let url = `${process.env.REACT_APP_API_BASE_URL}/task`;

      if (tasksNumber !== "0") {
        url += `?quantity=${tasksNumber}`;
      }
      let response = {};
      try {
        response = await axios.get(url);
      } catch (e) {
        dispatch({ type: "SET_TASK_ERROR" });
        return;
      }

      if (response.data.length === 0) {
        dispatch({ type: "SET_TASK_EMPTY" });
        return;
      }

      dispatch({ type: "SET_TASK_DATA", payload: { data: response.data } });
    };

    fetchTitles();
  }, [tasksNumber, dispatch]);

  return (
    <React.Fragment>
      <Layout>
        <TaskMessage />
        <CardList />
      </Layout>
      {showPopup && <Popup />}
    </React.Fragment>
  );
}

export default App;
