import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
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

	useEffect(() => {
		// store state in local storage
		try {
			const storageState = JSON.parse(window.localStorage.getItem('state'));
			if (storageState !== null) setState(storageState);
		} catch {
			setState(initState([], 0));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem('state', JSON.stringify(state));
	}, [state]);

	const clearState = () => {
		const clearedState = initState([], 0);
		setState(clearedState);
	};

	const pushTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		};
		const newState = initState([...state.data, newTodo], state.completedTodo);
		setState(newState);
	};

	const clearCompletedTodos = () => {
		const uncompletedTodos = [
			...state.data.filter((todo) => !todo.isCompleted),
		];
		const filteredState = initState(uncompletedTodos, 0);
		setState(filteredState);
	};

	const deleteTaskHandler = (todoId) => {
		const filteredTodos = [
			...state.data.filter((todo) => {
				if (todoId !== todo.id) return true;
				else if (todo.isCompleted) state.completedTodo -= 1;
			}),
		];
		const newState = initState(filteredTodos, state.completedTodo);
		setState(newState);
	};

	const setIsCompletedHandler = (todoId) => {
		const changedTodo = state.data.map((todo) => {
			if (todo.id === todoId) {
				todo.isCompleted
					? (state.completedTodo -= 1)
					: (state.completedTodo += 1);
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});

		const newState = initState(changedTodo, state.completedTodo);

		setState(newState);
	};

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTodoHandler} />
					{!!state.data.length && ( //if have not empty array
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
