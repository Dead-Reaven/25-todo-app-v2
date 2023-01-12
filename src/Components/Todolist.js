import Todo from './Todo';
import checkImg from '../IMG/check.ico';
import style from '../CSS/Todolist.module.css';
const Todolist = (props) => {
	const { state, deleteTask, setIsCompleted } = props;

	const todos = state.data.map((item, index) => (
		<Todo
			data={item}
			id={index}
			deleteTask={deleteTask}
			setIsCompleted={setIsCompleted}
			key={index}
		/>
	));

	return !state.data.length ? ( // if list is empty output massage
		<h1 className={style.voidList}>
			All tasks is done!
			<img src={checkImg} className={style.Img} />
		</h1>
	) : (
		// else show todos
		<div className={style.TodoList}>{todos}</div>
	);
};

export default Todolist;
