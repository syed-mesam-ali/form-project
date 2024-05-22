import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRadioChange } from "../../actions/radioActions";

const DEFAULT_OPTIONS = [
	{ name: "option-a", title: "Option A" },
	{ name: "option-b", title: "Option B" },
	{ name: "option-c", title: "Option C" }
];

type ReduxState = {
	radioOption: string;
};

const RadioButton = () => {
	const selectedOption = useSelector((state: ReduxState) => state.radioOption);
	const dispatch = useDispatch();

	const onOptionChange = (e: React.BaseSyntheticEvent) => {
		dispatch(onRadioChange(e.target.value));
	};

	return (
		<div className="mt-6 space-y-6">
			<h3 className="text-xl">My Radio Buttons</h3>
			{DEFAULT_OPTIONS.map((option) => (
				<div
					key={option.name}
					className="flex items-center gap-x-3"
				>
					<input
						id={option.name}
						value={option.name}
						name="my-options"
						type="radio"
						className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						checked={selectedOption === option.name}
						onChange={onOptionChange}
					/>
					<label
						htmlFor={option.name}
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						{option.title}
					</label>
				</div>
			))}
		</div>
	);
};

export default RadioButton;
