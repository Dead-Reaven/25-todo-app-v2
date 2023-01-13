import Todo from './Todo';
import checkImg from '../IMG/check.ico';
import style from '../CSS/Todolist.module.css';

const Todolist = (props) => {
	const { state, deleteTask, setIsCompleted } = props;

	const todos = state.data.map((todo) => (
		<Todo
			todoState={todo}
			deleteTask={deleteTask}
			setIsCompleted={setIsCompleted}
			key={todo.id}
		/>
	));

	return !state.data.length ? ( // if list is empty output massage
		<h1 className={style.voidList}>
			All tasks is done!
			<img src={checkImg} className={style.Img} />
		</h1>
	) : (
		// else show todos
		<div className={style.TodoList}>
			{todos}
			<h1>Completed {state.completedTodo} todo{state.completedTodo > 1 && 's'} </h1>
		</div>
	);
};

export default Todolist;
