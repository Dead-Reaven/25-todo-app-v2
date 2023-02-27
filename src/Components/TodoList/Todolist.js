import { useContext } from 'react'
import useTodosContext from '../../context/useTodosContext'
import Todo from './Todo/Todo'
import './TodoList.css'

const Todolist = () => {
	// if list is empty output massage
	const [todos] = useContext(useTodosContext)

	if (!todos.length)
		return <div className='empty-list' data-testid='empty list'></div>

	return (
		<div data-testid='todo list' className='container__todos'>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			))}
		</div>
	)
}

export default Todolist
