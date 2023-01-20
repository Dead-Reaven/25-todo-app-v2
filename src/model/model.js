import useTodos from './hooks/useTodos';
import { v4 as uuidv4 } from 'uuid';

const model = {
	InitState: () => {
		const { todos, setTodos } = useTodos();
		model.todos = todos;
		model.setTodos = setTodos;
	},

	todos: [],
	setTodos: () => {},

	pushTodo: (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4(),
		};
		model.setTodos([...model.todos, newTodo]);
	},

	deleteTodo: (todoId) => {
		const filteredTodos = [
			...model.todos.filter((todo) => {
				if (todoId !== todo.id) return true;
			}),
		];
		model.setTodos(filteredTodos);
	},

	toggleIsCompleted: (todoId) => {
		const changedTodo = model.todos.map((todo) => {
			if (todo.id === todoId)
				return { ...todo, isCompleted: !todo.isCompleted };

			return todo;
		});
		model.setTodos(changedTodo);
	},

	countCompletedTodos: () => {
		if (!!model.todos.length)
			return model.todos.reduce(
				(acc, currentTodo) => (currentTodo.isCompleted ? acc + 1 : acc),
				0
			);
		return 0;
	},

	clearCompletedTodos: () => {
		const uncompletedTodos = [
			...model.todos.filter((todo) => !todo.isCompleted),
		];

		model.setTodos(uncompletedTodos);
	},
};

export default model;
