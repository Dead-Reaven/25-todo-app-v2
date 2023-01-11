import Form from './Components/Form';
import Todolist from './Components/Todolist';
import { useState } from 'react';
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

	// console.log(state);

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

	const setIsCompletedHandler = (todoId, bolean) => {
		// const isCompleted = state.data[todoId].isCompleted;
		state.data[todoId].isCompleted = bolean; //isCompleted ? false : true;
		setState(initState([...state.data], state.completedTodo));
	};

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTaskHandler} />
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
