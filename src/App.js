import { v4 as uuidv4 } from 'uuid'
import useTodos from './hooks/useTodos'
import ActionsButtons from './Components/ActionsButtons/ActionsButtons'
import Form from './Components/Form/Form'
import Todolist from './Components/TodoList/Todolist'

import './css/App.css'
import './css/null.css'
import './css/scroll-bar.css'

function App() {
	const { todos, setTodos } = useTodos()

	const pushTodo = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		}
		setTodos([...todos, newTodo])
	}

	const deleteTodo = (todoId) => {
		const filteredTodos = [...todos.filter((todo) => todoId !== todo.id)]
		setTodos(filteredTodos)
	}

	const toggleIsCompleted = (todoId) => {
		const changedTodo = todos.map((todo) => {
			if (todo.id === todoId) return { ...todo, isCompleted: !todo.isCompleted }

			return todo
		})
		setTodos(changedTodo)
	}

	const countCompletedTodos = () => {
		if (!!todos.length)
			return todos.reduce(
				(acc, currentTodo) => (currentTodo.isCompleted ? acc + 1 : acc),
				0
			)
		return 0
	}

	const clearCompletedTodos = () => {
		const uncompletedTodos = [...todos.filter((todo) => !todo.isCompleted)]

		setTodos(uncompletedTodos)
	}

	return (
		<div className='App'>
			<header>
				{/* {!!todos() && ( */}
				<ActionsButtons
					clearTodos={() => setTodos([])}
					clearCompleted={clearCompletedTodos}
					countCompletedTodos={countCompletedTodos}
				/>
				{/* )} */}
			</header>

			<main className='container'>
				<Todolist
					todos={todos}
					deleteTodo={deleteTodo}
					toggleIsCompleted={toggleIsCompleted}
				/>
			</main>

			<footer className='container'>
				<Form onSubmitForm={pushTodo} />
			</footer>
		</div>
	)
}

export default App
