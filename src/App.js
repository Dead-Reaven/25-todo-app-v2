import Form from './Components/Form';
import Todolist from './Components/Todolist';
import { useState } from 'react';
import './CSS/null.css';
import './CSS/App.css';

const initTodos = () => {
	return {
		data: [
			{ task1: { text: '', completed: false } },
			{ task2: { text: '', completed: false } },
			{ task3: { text: '', completed: false } },
			{ task4: { text: '', completed: false } },
		],
		getTotal() {
			return this.data.length;
		},
		completedTodo: 0,
	};
};
function App() {

	// console.log(`Active:${taskList}\nCompleted:${completedTasks}`);

	console.log(initTodos());

	// const pushTaskHandler = (text) => setTaskList([...taskList, text]);

	// const deleteTaskHandler = (taskId) =>
	// 	setTaskList([...taskList.filter((_, index) => taskId !== index)]);

	// const clearAllHandler = () => {
	// 	setTaskList([]);
	// 	setCompletedTasks([]);
	// };

	// const completeTaskHandler = (taskId) => {
	// 	//! logic bug
	// 	const task = taskList.filter((_, index) => taskId === index);
	// 	setCompletedTasks([...completedTasks, task]);
	// 	console.log(task);
	// };
	// const removeCompletedTaskHandler = (taskId) => {
	// 	//! logic bug
	// 	setCompletedTasks([...taskList.filter((_, index) => taskId !== index)]);
	// };

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={pushTaskHandler} />
					<Todolist
						taskList={taskList}
						deleteTask={deleteTaskHandler}
						deleteAll={clearAllHandler}
						completeTask={completeTaskHandler}
						removeCompletedTask={removeCompletedTaskHandler}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
