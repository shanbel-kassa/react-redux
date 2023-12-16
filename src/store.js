import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { aboutReducer } from "./redux/reducer/about-reduicer";

const rootReducer = combineReducers({
  aboutReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export type RootStore = ReturnType<typeof rootReducer>;
export default store;
