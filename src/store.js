import { createStore } from "redux";
import counterReducer from "./Services/Reducer/CounterEeduver";

const store = createStore(counterReducer);

export default store;