import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import Todo from './Todo';
import style from '../CSS/Todolist.module.css';
import '../CSS/checkAnimation.css';

const Todolist = ({ todos }) => {
	const { countCompletedTodos } = useContext(controllerContext);

	const todosComponents = todos.map((todo) => (
		<Todo todo={todo} key={todo.id} />
	));

	const completedTodosNumber = countCompletedTodos();

	// if list is empty output massage
	if (!todos.length)
		return (
			<h1 className={style.voidList}>
				All tasks is done!
				<div className='SucessContainer'>
					<div className='w3-modal-icon w3-modal-success animate'>
						<span className='w3-modal-line w3-modal-tip animateSuccessTip'></span>
						<span className='w3-modal-line w3-modal-long animateSuccessLong'></span>
						<div className='w3-modal-placeholder'></div>
						<div className='w3-modal-fix'></div>
					</div>
				</div>
			</h1>
		);

	return (
		<div className={style.TodoList}>
			{todosComponents}
			<h1>
				Completed
				{completedTodosNumber > 1
					? ` ${completedTodosNumber} todos`
					: ` ${completedTodosNumber} todo`}
			</h1>
		</div>
	);
};

export default Todolist;
