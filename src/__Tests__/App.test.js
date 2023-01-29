import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const setup = () => {
	const utils = render(<App />);
	const form = utils.getByTestId('form');
	const todoInput = utils.getByTestId('input text');
	const emptyList = utils.queryByTestId('empty list');
	const todoList = utils.queryByTestId('todo list');
	const buttonSubmit = utils.getByTestId('btn submit');

	return {
		form,
		todoInput,
		buttonSubmit,
		emptyList,
		todoList,
		...utils,
	};
};

const submitTimes = (count) => {
	const { buttonSubmit, todoInput } = setup();
	for (let i = 1; i <= count; i++) {
		fireEvent.change(todoInput, { target: { value: `Test input ${i}` } });
		fireEvent.click(buttonSubmit);
	}
};

describe('Initial view', () => {
	test('It should render form', () => {
		const { form, buttonSubmit, todoInput } = setup();
		expect(form).toBeInTheDocument();
		expect(buttonSubmit).toBeInTheDocument();
		expect(todoInput.value).toBe('');
	});

	test('It should show massage about empty list ', () => {
		const { emptyList } = setup();
		expect(emptyList).toBeInTheDocument();
	});

	test('Todo list should be not in the document', () => {
		const { todoList } = setup();
		expect(todoList).toBeNull();
	});
});

describe('Events', () => {
	describe('Check events <Form /> component', () => {
		test('It should not submit if text input is empty', () => {
			const { buttonSubmit } = setup();
			fireEvent.click(buttonSubmit);
			expect(screen.queryByTestId('todo list')).toBeNull();
			expect(screen.queryByTestId('empty list')).toBeInTheDocument();
		});

		test('It should contain todos after multiple submits', () => {
			const submitsCount = 4;
			submitTimes(submitsCount);

			for (let i = 1; i <= submitsCount; i++)
				expect(screen.getByText(`Test input ${i}`));
			// empty list msg is hides, when we have 1+ todo
			expect(screen.queryByTestId('empty list')).toBeNull();
		});
	});

	describe('Check events <Todo /> component', () => {
		test('It should delete todo on click wastebasket button ', () => {
			setup();
			//after submits we have 4 todos
			const deleteTodoButtons = screen.getAllByTestId('btn-del-todo');
			expect(screen.getAllByTestId('todo')).not.toBeNull();
			deleteTodoButtons.forEach((btn) => fireEvent.click(btn));

			//after clear
			expect(screen.queryByTestId('todo')).toBeNull();
		});

		test('It should submit 4 todos and for each click on "complete todo" button then "return todo" ', () => {
			submitTimes(4);

			screen
				.getAllByTestId('btn-complete-todo')
				.forEach((btn) => fireEvent.click(btn));

			expect(screen.queryAllByTestId('completed-todo').length).toBe(4);

			const returnTodoButtons = screen.getAllByTestId('btn-return-todo');

			expect(returnTodoButtons.length).toBe(4);
			expect(screen.getByText(/completed 4 todos/i)).toBeInTheDocument();

			fireEvent.click(returnTodoButtons[0]);
			expect(screen.getByText(/completed 3 todos/i)).toBeInTheDocument();
			fireEvent.click(returnTodoButtons[3]);
			expect(screen.getByText(/completed 2 todos/i)).toBeInTheDocument();
			fireEvent.click(returnTodoButtons[2]);
			expect(screen.getByText(/completed 1 todo/i)).toBeInTheDocument();

			expect(screen.getAllByTestId('btn-return-todo').length).toBe(1);
			expect(screen.getAllByTestId('btn-complete-todo').length).toBe(3);
		});

		test('It should click on "Clear uncompleted todos" button', () => {
			setup();
			expect(screen.getAllByTestId('todo').length).toBe(3);
			expect(screen.queryAllByTestId('completed-todo').length).toBe(1);

			fireEvent.click(screen.getByTestId('clear completed'));

			expect(screen.queryAllByTestId('completed-todo').length).toBe(0);
			expect(screen.getAllByTestId('todo').length).toBe(3);
		});

		test('it should click on "Clear all" button', () => {
			setup();
			fireEvent.click(screen.getByTestId('clear all'));
			expect(screen.queryAllByTestId('todo').length).toBe(0);
			expect(screen.getByTestId('empty list'));
		});
	});
});
