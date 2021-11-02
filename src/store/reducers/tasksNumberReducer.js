const initialState = {
  number: "",
};

const tasksNumberReducer = (state = initialState, action) => {
  if (action.type === "SET_TASKS_NUMBER")
    return {
      number: action.payload,
    };
  return state;
};

export default tasksNumberReducer;
