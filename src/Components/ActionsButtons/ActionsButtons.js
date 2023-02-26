import { RxUpdate } from 'react-icons/rx'
import { VscChecklist } from 'react-icons/vsc'
import './ActionsButtons.css'

function ActionsButtons({ clearTodos, clearCompleted, countCompletedTodos }) {
	const completedTodos = countCompletedTodos()

	return (
		<div className='shadow'>
			<div className='container header__container  '>
				<div className='actions-buttons'>
					<button
						onClick={clearTodos}
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
						onClick={clearCompleted}
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
