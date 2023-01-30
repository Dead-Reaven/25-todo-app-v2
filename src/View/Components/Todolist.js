import Todo from './Todo';

const Todolist = ({ todos }) => {
	// if list is empty output massage
	if (!todos.length)
		return <h1 data-testid='empty list'>All tasks is done!</h1>;
	return (
		<div data-testid='todo list' className='container__todos'>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			))}
		</div>
	);
};

export default Todolist;
