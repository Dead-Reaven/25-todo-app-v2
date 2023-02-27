import { useContext } from 'react'
import useTodosContext from '../../../context/useTodosContext'

import { BiArrowBack, BiCheck } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCheck2 } from 'react-icons/bs'
import './todo.css'

const Todo = ({ todo }) => {
	const { text, isCompleted, id } = todo
	const [todos, setTodos] = useContext(useTodosContext)

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

	return (
		<div
			data-testid={isCompleted ? 'completed-todo' : 'todo'}
			className={isCompleted ? 'completed-todo ' : 'todo shadow'}
		>
			<div className='todo__header'>
				<h1 className='todo__header__title'>{text}</h1>
				<div className='todo__header__buttons'>
					<button
						data-testid={isCompleted ? 'btn-return-todo' : 'btn-complete-todo'}
						className=' shadow'
						onClick={() => toggleIsCompleted(id)}
					>
						{isCompleted ? (
							<BiArrowBack className='todo__header__btn-return' />
						) : (
							<BiCheck className='todo__header__btn-done' />
						)}
					</button>
					<button
						data-testid='btn-del-todo'
						className='todo__header__btn-del shadow'
						onClick={() => deleteTodo(id)}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
			</div>

			<div className='todo__footer'>
				<span className='time-start'>
					started at {new Date().toDateString()}
				</span>
				{isCompleted ? (
					<div className='time-end'>
						<BsCheck2 className='completed-ico shadow' />
						<span className='time-end__completed'>
							completed at
							<span className='date'> {new Date().toDateString()}</span>
						</span>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Todo
