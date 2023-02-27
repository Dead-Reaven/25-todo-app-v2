import { useContext, useState } from 'react'
import useTodosContext from '../../context/useTodosContext'
import { v4 as uuidv4 } from 'uuid'
import { TbBrandTelegram } from 'react-icons/tb'
import './Form.css'

const Form = () => {
	const [todoText, setTodoText] = useState('')
	const [todos, setTodos] = useContext(useTodosContext)

	const addTodo = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		}
		setTodos([...todos, newTodo])
	}

	return (
		<form
			data-testid='form'
			className='form'
			onSubmit={(event) => {
				event.preventDefault()

				if (todoText.length) {
					addTodo(todoText)
					setTodoText('')
				}
			}}
		>
			<div className='input__container blue-gradient '>
				<input
					placeholder='Press enter to add new todo...'
					className='  input__container__text-input'
					type='text'
					value={todoText}
					autoComplete='off'
					data-testid='input text'
					onChange={(event) => setTodoText(event.target.value)}
				/>

				<button
					type='submit'
					data-testid='btn submit'
					className='blue-gradient'
					style={{ background: 'none' }}
				>
					<TbBrandTelegram />
				</button>
			</div>
		</form>
	)
}

export default Form
