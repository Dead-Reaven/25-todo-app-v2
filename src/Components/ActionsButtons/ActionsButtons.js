import { useContext } from 'react'
import useTodosContext from '../../context/useTodosContext'
import { RxUpdate } from 'react-icons/rx'
import { VscChecklist } from 'react-icons/vsc'
import './ActionsButtons.css'

function ActionsButtons() {
	const [todos, setTodos] = useContext(useTodosContext)

	const clearCompletedTodos = () => {
		const uncompletedTodos = [...todos.filter((todo) => !todo.isCompleted)]

		setTodos(uncompletedTodos)
	}

	const countCompletedTodos = () => {
		if (!!todos.length)
			return todos.reduce(
				(acc, currentTodo) => (currentTodo.isCompleted ? acc + 1 : acc),
				0
			)
		return 0
	}

	const completedTodos = countCompletedTodos()

	return (
		<div className='shadow'>
			<div className='container header__container  '>
				<div className='actions-buttons'>
					<button
						onClick={() => setTodos([])}
						data-testid='clear all'
						title='Clear all'
						className='blue-gradient'
					>
						<RxUpdate />
					</button>
					<button
						className={`${
							!!completedTodos ? '  blue-gradient  ' : ' inactive'
						} `}
						onClick={clearCompletedTodos}
						data-testid='clear completed'
						title='Clear completed'
					>
						<VscChecklist />
						<span>
							{completedTodos
								? `Completed ${completedTodos} todo${
										completedTodos > 1 ? 's' : ''
								  }`
								: ``}
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ActionsButtons
