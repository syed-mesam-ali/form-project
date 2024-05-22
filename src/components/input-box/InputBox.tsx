import React, { useState } from "react";

const InputBox = () => {
	const [code, setCode] = useState("");
	const [isValid, setIsValid] = useState(true);

	const onInputChange = (e: React.BaseSyntheticEvent) => {
		setCode(e.target.value);

		const text = e.target.value;
		if (text.length) {
			const pattern = /^DISCOUNT\d{4}$/;

			if (pattern.test(text)) {
				setIsValid(true);
			} else {
				setIsValid(false);
			}
		}
	};

	return (
		<div className="mt-3">
			<label
				htmlFor="coupon-code"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				Enter Coupon code
			</label>
			<div className="mt-2">
				<input
					type="text"
					name="coupon-code"
					id="coupon-code"
					value={code}
					onChange={onInputChange}
					className="p-3 block w-full md:w-[30%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				{!isValid && <span className="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Please enter a valid coupon</span>}
			</div>
		</div>
	);
};

export default InputBox;
