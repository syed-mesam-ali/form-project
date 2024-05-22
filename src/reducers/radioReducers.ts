import { SELECT_RADIO_OPTION } from "../constants/types";

const initialState = "option-a";

type TodoAction = { type: string; payload: string };

export const radioReducer = (state = initialState, action: TodoAction) => {
	switch (action.type) {
		case SELECT_RADIO_OPTION:
			return action.payload;
		default:
			return state;
	}
};
