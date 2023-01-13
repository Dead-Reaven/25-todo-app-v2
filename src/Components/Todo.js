import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';

const Todo = (props) => {
	const { todoState, deleteTask, setIsCompleted } = props;

	return (
		<div
			className={
				// check if this todo is competed optional change style for this element
				`${style.Todo}` + ` ${todoState.isCompleted && style.inactiveItem} `
			}
		>
			{/* output ico and todo`s text align left*/}
			<RiTodoFill className={style.todoICo} /> 
			{todoState.text}
			{/* output actions buttons ok and del align right*/}
			<div className={style.options}>
				<button className={style.btnDel} onClick={() => deleteTask(todoState.id)}>
					del
				</button>
				<button
					className={style.btnOk}
					onClick={() => {
						setIsCompleted(todoState.id, todoState.isCompleted ? false : true);
					}}
				>
					ok
				</button>
			</div>
		</div>
	);
};

export default Todo;
