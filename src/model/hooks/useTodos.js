import { useState, useEffect } from 'react';

function useTodos() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		// store state in local storage
		const storageState = JSON.parse(window.localStorage.getItem('todos'));
		if (storageState !== null) setTodos(storageState);
	}, []);

	useEffect(() => {
		const stringifiedTodos = JSON.stringify(todos);
		window.localStorage.setItem('todos', stringifiedTodos);
	}, [todos]);

	return { todos, setTodos };
}

export default useTodos;
