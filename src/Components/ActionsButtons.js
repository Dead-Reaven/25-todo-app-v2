
function ActionsButtons( {onClickClear, onClickClearCompleted, isActive } ) {
	return (
		<div className='todo-actions'>
			<button onClick={onClickClear} className='btn'>
				Clear all
			</button>
			<button
				onClick={onClickClearCompleted}
				className={`${!isActive ? 'inactiveItem' : 'btn'}`}
			>
				Clear completed tasks
			</button>
		</div>
	);
}

export default ActionsButtons;
