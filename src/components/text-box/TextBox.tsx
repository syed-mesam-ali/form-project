import { useDispatch, useSelector } from "react-redux";
import { onChangeNotes } from "../../actions/notesActions";

type ReduxState = {
	notes: string;
};

const TextBox = () => {
	const myNotes = useSelector((state: ReduxState) => state.notes);
	const dispatch = useDispatch();

	return (
		<div className="mt-3">
			<label
				htmlFor="notes"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				Notes
			</label>
			<div className="mt-2">
				<textarea
					id="notes"
					name="notes"
					rows={3}
					value={myNotes}
					onChange={(e) => dispatch(onChangeNotes(e.target.value))}
					className="p-3 block w-full md:w-[30%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				></textarea>
			</div>
			<p className="mt-3 text-sm leading-6 text-gray-600">Write your notes.</p>
		</div>
	);
};

export default TextBox;
