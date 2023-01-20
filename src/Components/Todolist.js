import Todo from './Todo';
import style from '../CSS/Todolist.module.css';
import '../CSS/checkAnimation.css';

const Todolist = (props) => {
	const { todos, countCompletedTodos, deleteTodo, setIsCompleted } = props;

	const todosComponents = todos.map((todo) => (
		<Todo
			todo={todo}
			deleteTodo={deleteTodo}
			setIsCompleted={setIsCompleted}
			key={todo.id}
		/>
	));
	const completedTodos = countCompletedTodos();

	return !todos.length ? ( // if list is empty output massage
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
	) : (
		// else show todos
		<div className={style.TodoList}>
			{todosComponents}
			<h1>
				Completed
				{completedTodos > 1
					? ` ${completedTodos} todos`
					: ` ${completedTodos} todo`}
			</h1>
		</div>
	);
};

export default Todolist;
