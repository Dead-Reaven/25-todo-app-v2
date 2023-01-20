import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';

const Todo = (props) => {
	const { todo, deleteTodo, setIsCompleted } = props;

	return (
		<div
			className={
				// check if this todo is competed optional change style for this element
				`${style.Todo}` + ` ${todo.isCompleted && style.inactiveItem} `
			}
		>
			{/* output ico and todo`s text align left*/}
			<RiTodoFill className={style.todoICo} />
			{todo.text}
			{/* output actions buttons ok and del align right*/}
			<div className={style.options}>
				<RiDeleteBin6Line
					title='delete todo'
					className={style.btnDel}
					onClick={() => deleteTodo(todo.id)}
				/>

				{todo.isCompleted ? (
					<TbArrowBackUp
						title='return todo'
						className={style.btnCancel}
						onClick={() => {
							setIsCompleted(todo.id);
						}}
					/>
				) : (
					<AiOutlineCheckCircle
						title='complete todo!'
						className={style.btnOk}
						onClick={() => {
							setIsCompleted(todo.id);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Todo;
