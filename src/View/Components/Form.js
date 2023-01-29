import { useState, useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';

const Form = () => {
	const { onSubmitForm } = useContext(controllerContext);
	const [todoText, setTodoText] = useState('');

	return (
		<form
			data-testid='form'
			onSubmit={(event) => {
				event.preventDefault();

				if (!!todoText) {
					onSubmitForm(todoText);
					setTodoText('');
				}
			}}
		>
			<div>
				<input
					placeholder='Press enter to add new todo...'
					type='text'
					value={todoText}
					autoComplete='off'
					data-testid='input text'
					onChange={(event) => setTodoText(event.target.value)}
				/>

				<button type='submit' data-testid='btn submit'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
