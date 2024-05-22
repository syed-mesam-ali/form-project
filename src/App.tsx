import InputBox from "./components/input-box/InputBox";
import RadioButton from "./components/radio-button/RadioButton";
import RandomDiscountCode from "./components/random-discount-code/RandomDiscountCode";
import TextBox from "./components/text-box/TextBox";

function App() {
	return (
		<div className="p-4">
			<h1 className="text-3xl">My Form Elements</h1>
			<RadioButton />
			<InputBox />
			<RandomDiscountCode />
			<TextBox />
		</div>
	);
}

export default App;
