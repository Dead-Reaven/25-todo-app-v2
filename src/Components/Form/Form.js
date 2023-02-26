import { useState } from 'react'
import { TbBrandTelegram } from 'react-icons/tb'
import './Form.css'

const Form = ({ onSubmitForm }) => {
	const [todoText, setTodoText] = useState('')
	
	return (
		<form
			data-testid='form'
			className='form'
			onSubmit={(event) => {
				event.preventDefault()

				if (!!todoText) {
					onSubmitForm(todoText)
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
