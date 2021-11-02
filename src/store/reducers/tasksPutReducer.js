const taskPutReducer = (state = {}, action) => {
  switch (action.type) {
    case "SENDING_PUT_REQUEST":
      return { state: "LOADING" };

    case "SUCCESS_PUT_REQUEST":
      return { state: "SUCCESS" };

    case "ERROR_PUT_REQUEST":
      return { state: "ERROR" };

    default:
      return state;
  }
};

export default taskPutReducer;
