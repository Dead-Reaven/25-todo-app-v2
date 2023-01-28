import { useState, useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import { IoIosSend } from 'react-icons/io';
import style from '../CSS/TodoForm.module.css';

const Form = () => {
	const { onSubmitForm } = useContext(controllerContext);
	const [todoText, setTodoText] = useState('');

	return (
		<form
			className={style.Form}
			data-testid='form'
			onSubmit={(event) => {
				event.preventDefault();

				if (!!todoText) {
					onSubmitForm(todoText);
					setTodoText('');
				}
			}}
		>
			<h1 className={style.h1}>React todo app!</h1>
			<div className={style.formInput}>
				<input
					className={style.input}
					placeholder='Press enter to add new todo...'
					type='text'
					value={todoText}
					autoComplete='off'
					data-testid='input text'
					onChange={(event) => setTodoText(event.target.value)}
				/>
				<button type='submit' data-testid='btn submit'>
					<IoIosSend
						className={`${!!todoText ? style.submitActive : style.submit}`}
					/>
				</button>
			</div>
		</form>
	);
};

export default Form;
