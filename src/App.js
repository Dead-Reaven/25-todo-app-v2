import { useState } from 'react';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
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
			[
				...state.data.filter((todo, index) => {
					if (taskId !== index) return true;
					else {
						if (todo.isCompleted) state.completedTodo -= 1;
					}
				}),
			],
			state.completedTodo
		);

		setState(filteredState);
	};

	const clearState = () => setState(initState([], 0));

	const clearCompletedTodos = () => {
		const uncompletedTodos = [
			...state.data.filter((todo) => !todo.isCompleted),
		];
		const filteredState = initState(uncompletedTodos, 0);
		setState(filteredState);
	};

	const setIsCompletedHandler = (todoId, bolean) => {
		state.data[todoId].isCompleted = bolean;
		setState(
			initState(
				[...state.data],
				bolean ? state.completedTodo + 1 : state.completedTodo - 1
			)
		);
	};

	console.log(state);
	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTaskHandler} />
					{!!state.data.length && (
						<div>
							<button onClick={clearState} className='btn'>
								Clear all
							</button>
							<button
								onClick={clearCompletedTodos}
								className={`${!state.completedTodo ? 'inactiveItem' : 'btn'}`}
							>
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
