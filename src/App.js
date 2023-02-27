import useTodos from './hooks/useTodos'
import useTodosContext from './context/useTodosContext'
import ActionsButtons from './Components/ActionsButtons/ActionsButtons'
import Todolist from './Components/TodoList/Todolist'
import Form from './Components/Form/Form'

import './css/App.css'
import './css/null.css'
import './css/scroll-bar.css'

function App() {
	const { todos, setTodos } = useTodos()

	return (
		<div className='App'>
			<useTodosContext.Provider value={[todos, setTodos]}>
				<header>{
					todos.length ?
					<ActionsButtons /> : null}
				</header>

				<main className='container'>
					<Todolist />
				</main>

				<footer className='container'>
					<Form />
				</footer>
			</useTodosContext.Provider>
		</div>
	)
}

export default App
