import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';

function ActionsButtons() {
	//!del delcompleted
	const { isShowActionButtons, clearTodos, clearCompleted, countCompletedTodos } =
		useContext(controllerContext);
	if (isShowActionButtons())
		return (
			<div className='todo-actions'>
				<button className='btn' onClick={clearTodos}>
					Clear all
				</button>
				<button
					className={`${ !!countCompletedTodos() ? 'btn' : 'inactiveItem'}`}
					onClick={clearCompleted}
				>
					Clear completed tasks
				</button>
			</div>
		);
}

export default ActionsButtons;
