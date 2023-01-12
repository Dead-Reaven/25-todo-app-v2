import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { useState } from 'react';

const Todo = (props) => {
	const { data, id, deleteTask, setIsCompleted } = props;

	return (
		<div
			className={
				`${style.Todo}` + ` ${data.isCompleted && style.TodoCompleted} `
			}
		>
			<RiTodoFill className={style.todoICo} />
			{data.text}
			<div className={style.options}>
				<button className={style.btnDel} onClick={() => deleteTask(id)}>
					del
				</button>
				<button
					className={style.btnOk}
					onClick={() => {
						setIsCompleted(id, data.isCompleted ? false : true);
					}}
				>
					ok
				</button>
			</div>
		</div>
	);
};

export default Todo;
