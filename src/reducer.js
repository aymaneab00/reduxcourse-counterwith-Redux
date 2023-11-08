const initialstate = { num: 0 };
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "incrementation":
      return { ...state, num: state.num + 1 };
    case "Decrementer":
      return { ...state, num: state.num - 1 };
    case "reset":
      return { ...state, num: 0 };
    default: return state;
  }
 
};
export default reducer;
