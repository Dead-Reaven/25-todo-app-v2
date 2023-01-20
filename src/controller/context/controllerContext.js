import { createContext } from 'react';

const controllerContext = createContext({
	onSubmitForm: (text) => {},
	isShowActionButtons: () => null,
	countCompletedTodos: () => {},
	toggleIsCompleted: (id) => {},
	deleteTodo: (id) => {},
	clearTodos: () => {},
	clearCompleted: () => {},
});

export default controllerContext;
