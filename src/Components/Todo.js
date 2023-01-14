import style from '../CSS/Todolist.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';

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
				<RiDeleteBin6Line
					title='delete todo'
					className={style.btnDel}
					onClick={() => deleteTask(todoState.id)}
				/>

				{todoState.isCompleted ? (
					<TbArrowBackUp
						title='return todo'
						className={style.btnCancel}
						onClick={() => {
							setIsCompleted(todoState.id);
						}}
					/>
				) : (
					<AiOutlineCheckCircle
						title='complete todo!'
						className={style.btnOk}
						onClick={() => {
							setIsCompleted(todoState.id);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Todo;
