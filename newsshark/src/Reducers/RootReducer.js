import {combineReducers} from "redux";

import changeNews from "./Reducer";

const rootReducer = combineReducers({
    changeNews,
});

export default rootReducer;