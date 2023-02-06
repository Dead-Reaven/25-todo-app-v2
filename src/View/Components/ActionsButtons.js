import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import { RxUpdate } from 'react-icons/rx';
import { VscChecklist } from 'react-icons/vsc';

function ActionsButtons() {
	//!del delcompleted
	const {
		clearTodos,
		clearCompleted,
		countCompletedTodos,
	} = useContext(controllerContext);

	const completedTodos = countCompletedTodos();

	return (
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
					!completedTodos ? 'inactive blue-gradient' : 'blue-gradient'
				} `}
				onClick={clearCompleted}
				data-testid='clear completed'
				title='Clear completed'
			>
				<VscChecklist />
				<span>
					{completedTodos
						? `Completed ${completedTodos} todo${completedTodos > 1 ? 's' : ''}`
						: ``}
				</span>
			</button>
		</div>
	);
}

export default ActionsButtons;
