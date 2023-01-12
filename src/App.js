import { useState } from 'react';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import style from './CSS/Todolist.module.css';
import './CSS/null.css';
import './CSS/App.css';

const initState = (data, completedTodo) => {
	return {
		data, //array with objects
		completedTodo, // number of completed todos
	};
};

function App() {
	const [state, setState] = useState(initState([], 0));

	const pushTaskHandler = (text) => {
		const pushedState = initState(
			[...state.data, { text, isCompleted: false }],
			state.completedTodo
		);

		setState(pushedState);
	};

	const deleteTaskHandler = (taskId) => {
		const filteredState = initState(
			[...state.data.filter((_, index) => index !== taskId)],
			state.completedTodo
		);

		setState(filteredState);
	};

	const clearState = () => setState(initState([], 0));

	const clearCompletedTodos = () => {
		const uncompletedTodos = [
			...state.data.filter((todo) => !todo.isCompleted ),
		];
		const filteredState = initState(uncompletedTodos, 0);
		setState(filteredState);
	};

	const setIsCompletedHandler = (todoId, bolean) => {
		state.data[todoId].isCompleted = bolean;
		setState(initState([...state.data], state.completedTodo));
	};

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTaskHandler} />
					{!!state.data.length && (
						<div className={style.row}>
							<button onClick={clearState}>Clear all</button>
							<button onClick={clearCompletedTodos}>
								Clear completed tasks
							</button>
						</div>
					)}
					<Todolist
						state={state}
						deleteTask={deleteTaskHandler}
						setIsCompleted={setIsCompletedHandler}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
