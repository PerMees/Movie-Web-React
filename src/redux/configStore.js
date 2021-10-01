import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import FilmReducer from "./reducers/FilmReducer";
import LoadingReducer from "./reducers/LoadingReducer";
import CinemaReducer from "./reducers/CinemaReducer";

const rootReducer = combineReducers({
  FilmReducer,
  LoadingReducer,
  CinemaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
