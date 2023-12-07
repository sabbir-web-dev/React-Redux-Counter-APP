import { DECREMENT, INCREMENT, RESET } from "../Constence/counterConstens";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};
