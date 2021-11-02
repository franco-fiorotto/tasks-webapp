const initialState = { fetchState: "LOADING", data: [] };

const tasksDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASK_LOADING":
      return { fetchState: "LOADING", data: state.data };

    case "SET_TASK_ERROR":
      return { fetchState: "ERROR" };

    case "SET_TASK_EMPTY":
      return { fetchState: "SUCCESS", data: [] };

    case "SET_TASK_DATA":
      return { fetchState: "SUCCESS", data: action.payload.data };

    case "SET_TASK_FILTER":
      return {
        fetchState: state.fetchState,
        data: state.data,
        filterText: action.payload.filterText,
      };

    default:
      return state;
  }
};

export default tasksDataReducer;
