import { DECREMENT, INCREMENT, RESET } from "../Constence/counterConstens";

const inisialCount = { count: 0 };

const counterReducer = (state = inisialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
