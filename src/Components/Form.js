import { useState } from 'react';
import style from '../CSS/TodoForm.module.css';
const Form = (props) => {
	const { onSubmit } = props;
	const [todoText, setTodoText] = useState('');

	const onSubmitHandler = (event) => {
		event.preventDefault();
		const text = event.target.task.value;
		// check if text is empty
		!!text.length && onSubmit(text);
		setTodoText('');
	};

	return (
		<form className={style.Form} onSubmit={(event) => onSubmitHandler(event)}>
			<h1 className={style.h1}>React todo app!</h1>
			<input
				className={style.input}
				placeholder='Press enter to add new todo...'
				type='text'
				name='task'
				value={todoText}
				autoComplete='off'
				onChange={(event) => setTodoText(event.target.value)}
			/>
			{/* {!!todoText.length && (
				<input type='submit' className={style.submit} value='Start todo!' />
			)} */}
		</form>
	);
};

export default Form;
