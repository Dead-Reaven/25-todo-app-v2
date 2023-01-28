import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';

function ActionsButtons() {
	//!del delcompleted
	const {
		isShowActionButtons,
		clearTodos,
		clearCompleted,
		countCompletedTodos,
	} = useContext(controllerContext);
	if (isShowActionButtons())
		return (
			<div className='todo-actions'>
				<button
					className='btn'
					onClick={clearTodos}
					data-testid='clear all'
				>
					Clear all
				</button>
				<button
					className={`${!!countCompletedTodos() ? 'btn' : 'inactiveItem'}`}
					onClick={clearCompleted}
					data-testid='clear completed'
				>
					Clear completed todos
				</button>
			</div>
		);
}

export default ActionsButtons;
