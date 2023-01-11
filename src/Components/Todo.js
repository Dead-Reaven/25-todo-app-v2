import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { useState } from 'react';

const Todo = (props) => {
	const { data, id, deleteTask, setIsCompleted } = props;
	// const [todoIsCompleted, setTodoIsCompleted] = useState(data.isCompleted);
	const changeIsTodoCompleted = () => {
		if (data.isCompleted) { //! bug не меняется стиль при смене состояния App
			// setTodoIsCompleted(false);
			setIsCompleted(id, false);
		} else {
			// setTodoIsCompleted(true);
			setIsCompleted(id, true);
		}
	};
	return (
		<div
			className={ //! bug не меняется стиль при смене состояния App
				data.isCompleted ? `${style.Todo} ${style.isCompleted}` : style.Todo
			}
		>
			<RiTodoFill className={style.todoICo} />
			{data.text}
			<div className={style.options}>
				<button className={style.btnDel} onClick={() => deleteTask(id)}>
					del
				</button>
				<button className={style.btnOk} onClick={changeIsTodoCompleted}>
					ok
				</button>
			</div>
		</div>
	);
};

export default Todo;
