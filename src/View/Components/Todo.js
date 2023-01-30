import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import { BiCheck } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import {RxPencil1} from 'react-icons/rx' 

const Todo = ({ todo }) => {
	const { text, isCompleted, id, timeStart, timeEnd } = todo;
	const { deleteTodo, toggleIsCompleted } = useContext(controllerContext);

	return (
		<div
			data-testid={isCompleted ? 'completed-todo' : 'todo'}
			className={isCompleted ? 'completed-todo ' : 'todo shadow'}
		>
			<div className='todo__header'>
				<h1 className='todo__header__title'>Title</h1>
				<div className='todo__header__buttons'>
					<button
						data-testid={isCompleted ? 'btn-return-todo' : 'btn-complete-todo'}
						className=' shadow'
						onClick={() => toggleIsCompleted(id)}
					>
						{isCompleted ? (
							<RxCross2 className='todo__header__btn-return' />
						) : (
							<BiCheck className='todo__header__btn-done' />
						)}
					</button>
					<button
						data-testid='btn-del-todo'
						className='todo__header__btn-del shadow'
						onClick={() => deleteTodo(id)}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
			</div>

			<div className='todo__body'>
				<div className='todo__body__text'>
					<p>{text}</p>
				</div>
			</div>

			<div className='todo__footer'>
				<span className='time-start'>
					started at {new Date().toDateString()}
				</span>
				{isCompleted ? (
					<div className='time-end'>
						<BsCheck2 className='completed-ico shadow' />
						<span className='time-end__completed'>
							completed at
							<span className='date'> {new Date().toDateString()}</span>
						</span>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Todo;
