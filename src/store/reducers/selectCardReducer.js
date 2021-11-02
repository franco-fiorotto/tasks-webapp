const initialState = {
  showPopup: false,
};

const selectCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        showPopup: true,
        id: action.payload.id,
        title: action.payload.title,
      };
    case "CANCEL_POPUP":
      return {
        showPopup: false,
      };
    default:
      return state;
  }
};

export default selectCardReducer;
