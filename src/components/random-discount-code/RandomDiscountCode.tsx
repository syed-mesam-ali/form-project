import React, { useState } from "react";

const RandomDiscountCode = () => {
	const [code, setCode] = useState("");

	const onInputChange = (e: React.BaseSyntheticEvent) => {
		setCode(e.target.value);
	};

	// this geenrates random values as code
	function generateRandomCode(length: number) {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		let code = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			code += characters[randomIndex];
		}
		return "NEWCODE" + code;
	}

	const generateRandomCoupon = () => {
		const randomCode = generateRandomCode(4);
		setCode(randomCode);
	};

	return (
		<div className="mt-3">
			<label
				htmlFor="coupon-code-gen"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				Generate Random Code
			</label>
			<div className="mt-2 flex gap-4 flex-wrap">
				<input
					type="text"
					name="coupon-code-gen"
					id="coupon-code-gen"
					value={code}
					onChange={onInputChange}
					disabled
					className="p-3 block w-full md:w-[30%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					onClick={generateRandomCoupon}
				>
					Generate
				</button>
			</div>
		</div>
	);
};

export default RandomDiscountCode;
