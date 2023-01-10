import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { useState } from 'react';
// import taskIco from '../IMG/task.jpg';
const Todo = (props) => {
	const { data, id, deleteTask, completeTask, removeCompletedTask } = props;
	const [isTodoCompleted, setIsTodoCompleted] = useState(false);

	const changeIsTodoCompleted = () => { //! logic bug
		if (!isTodoCompleted) {
			completeTask(id);
			setIsTodoCompleted(true);
		} else {
			removeCompletedTask(id);
			setIsTodoCompleted(false);
		}
	};

	return (
		<div
			className={
				isTodoCompleted ? `${style.Todo} ${style.TodoCompleted}` : style.Todo
			}
		>
			<RiTodoFill className={style.todoICo} />
			{data}
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
