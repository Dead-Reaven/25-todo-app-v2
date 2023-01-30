import { useContext } from 'react';
import controllerContext from '../../controller/context/controllerContext';
import { RxUpdate } from 'react-icons/rx';
import { VscChecklist } from 'react-icons/vsc';

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
			<div className='actions-buttons'>
				<button onClick={clearTodos} data-testid='clear all' title='Clear all' className='' >
					<RxUpdate />
				</button>
				<button
					className={`${!!countCompletedTodos() ? '' : ''}`}
					onClick={clearCompleted}
					data-testid='clear completed'
					title='Clear completed'
				>
					<VscChecklist />
				</button>
			</div>
		);
}

export default ActionsButtons;
