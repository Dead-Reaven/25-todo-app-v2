import Todo from './Todo/Todo'
import './TodoList.css'

const Todolist = ({ todos, deleteTodo, toggleIsCompleted }) => {
	// if list is empty output massage
	if (!todos.length)
		return <div className='empty-list' data-testid='empty list'></div>

	return (
		<div data-testid='todo list' className='container__todos'>
			{todos.map((todo) => (
				<Todo
					todo={todo}
					deleteTodo={deleteTodo}
					toggleIsCompleted={toggleIsCompleted}
					key={todo.id}
				/>
			))}
		</div>
	)
}

export default Todolist
