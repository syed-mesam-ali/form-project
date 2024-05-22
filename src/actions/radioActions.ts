import { SELECT_RADIO_OPTION } from "../constants/types";

export const onRadioChange = (text: string) => {
	return { type: SELECT_RADIO_OPTION, payload: text };
};
