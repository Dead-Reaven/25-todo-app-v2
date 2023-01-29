import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';

const Todo = ({ todo }) => {
	const { deleteTodo, toggleIsCompleted } = useContext(controllerContext);
	return (
		<div data-testid={todo.isCompleted ? 'completed-todo' : 'todo'}>
			{todo.text}
			<button
				data-testid={todo.isCompleted ? 'btn-return-todo' : 'btn-complete-todo'}
				onClick={() => toggleIsCompleted(todo.id)}
			>
				complete
			</button>
			<button data-testid='btn-del-todo' onClick={() => deleteTodo(todo.id)}>
				delete
			</button>
		</div>
	);
};

export default Todo;
