import model from '../model/model';

const controller = {
	onSubmitForm: (text) => model.pushTodo(text),
	countCompletedTodos: () => model.countCompletedTodos(),
	toggleIsCompleted: (id) => model.toggleIsCompleted(id),
	deleteTodo: (id) => model.deleteTodo(id),
	clearTodos: () => model.setTodos([]),
	clearCompleted: () => model.clearCompletedTodos(),
};

export default controller;
