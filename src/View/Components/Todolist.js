import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import Todo from './Todo';

const Todolist = ({ todos }) => {
	const { countCompletedTodos } = useContext(controllerContext);
	const completedTodosNumber = countCompletedTodos();

	// if list is empty output massage
	if (!todos.length)
		return <h1 data-testid='empty list'>All tasks is done!</h1>;

	return (
		<div data-testid='todo list'>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			))}
			{/* <h1>
				Completed
				{completedTodosNumber > 1
					? ` ${completedTodosNumber} todos`
					: ` ${completedTodosNumber} todo`}
			</h1> */}
		</div>
	);
};

export default Todolist;
