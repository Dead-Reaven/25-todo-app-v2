import model from '../model/model';

const controller = {
	onSubmitForm: (text) => model.pushTodo(text),
	isShowActionButtons: () => !!model.todos.length,
	countCompletedTodos: () => model.countCompletedTodos(),
	toggleIsCompleted: (id) => model.toggleIsCompleted(id),
	deleteTodo: (id) => model.deleteTodo(id),
	clearTodos: () => model.setTodos([]),
	clearCompleted: () => model.clearCompletedTodos(),
};

export default controller;
