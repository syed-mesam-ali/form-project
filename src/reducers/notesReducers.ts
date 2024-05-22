import { ADD_NOTE } from "../constants/types";

const initialState = "";

type TodoAction = { type: string; payload: string };

export const notesReducer = (state = initialState, action: TodoAction) => {
	switch (action.type) {
		case ADD_NOTE:
			return action.payload;
		default:
			return state;
	}
};
