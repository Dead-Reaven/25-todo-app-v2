import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import './CSS/null.css';
import './CSS/App.css';

const initState = () => {
	return {
		data: [], //array with objects
	};
};

function App() {
	const [state, setState] = useState(initState());
	console.log(state)
	
	useEffect(() => {
		// store state in local storage
		try {
			const storageState = JSON.parse(window.localStorage.getItem('state'));
			if (storageState !== null) setState(storageState);
		} catch {
			setState(initState());
		}
	}, []);


	useEffect(() => {
		const stringifyedState = JSON.stringify(state);
		window.localStorage.setItem('state', stringifyedState);
	}, [state]);


	const pushTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		};
		setState({ ...state, data: [...state.data, newTodo] });
	};

	const clearCompletedTodos = () => {
		const uncompletedTodos = [
			...state.data.filter((todo) => !todo.isCompleted),
		];
		setState({ ...state, data: uncompletedTodos });
	};

	const deleteTaskHandler = (todoId) => {
		const filteredTodos = [
			...state.data.filter((todo) => {
				if (todoId !== todo.id) return true;
			}),
		];
		setState({ ...state, data: filteredTodos });
	};

	const setIsCompletedHandler = (todoId) => {
		const changedTodo = state.data.map((todo) => {
			if (todo.id === todoId) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});

		setState({ ...state, data: changedTodo });
	};

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTodoHandler} />
					{!!state.data.length && ( //if have not empty array
						<div className='todo-actions'>
							<button onClick={() => setState(initState())} className='btn'>
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
