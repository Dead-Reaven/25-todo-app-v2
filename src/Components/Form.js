import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
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
			<div className={style.formInput}>
				<input
					className={style.input}
					placeholder='Press enter to add new todo...'
					type='text'
					name='task'
					value={todoText}
					autoComplete='off'
					onChange={(event) => setTodoText(event.target.value)}
				/>
				<IoIosSend
					className={`${!!todoText.length ? style.submitActive : style.submit}`}
					onClick={() => {
						if (!!todoText.length) {
							onSubmit(todoText);
							setTodoText('');
						}
					}}
				/>
			</div>
		</form>
	);
};

export default Form;
