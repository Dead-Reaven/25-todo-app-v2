import Todo from './Todo';
import checkImg from '../IMG/check.ico';
import style from '../CSS/Todolist.module.css';
const Todolist = (props) => {
	const { taskList, deleteTask, deleteAll, completeTask,removeCompletedTask } = props;
	const todos = taskList.map((task, id) => (
		<Todo
			data={task}
			id={id}
			deleteTask={deleteTask}
			completeTask={completeTask}
			removeCompletedTask={removeCompletedTask}
			key={id}
		/>
	));

	return !taskList.length ? ( // if list is empty output massage
		<h1 className={style.voidList}>
			All tasks is done!
			<img src={checkImg} className={style.Img} />
		</h1>
	) : (
		// else show todos
		<div className={style.TodoList}>
			<div className={style.row}>
				<button onClick={deleteAll}>Clear all</button>
				<button>Clear complited tasks</button>
			</div>
			{todos}
		</div>
	);
};

export default Todolist;
