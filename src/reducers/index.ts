import { combineReducers } from "redux";
import { notesReducer } from "./notesReducers";
import { radioReducer } from "./radioReducers";

const rootReducer = combineReducers({
	notes: notesReducer,
	radioOption: radioReducer
});

export default rootReducer;
