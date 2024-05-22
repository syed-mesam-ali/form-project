import { ADD_NOTE } from "../constants/types";

export const onChangeNotes = (text: string) => {
	return { type: ADD_NOTE, payload: text };
};
