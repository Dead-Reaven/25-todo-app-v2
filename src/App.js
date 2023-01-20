import model from './Components/model/model';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import ActionsButtons from './Components/ActionsButtons';
import './CSS/null.css';
import './CSS/App.css';

function App() {
	model.InitTodos();

	return (
		<div className='App '>
			<div className='container'>
				<div className='todo'>
					<Form onSubmit={model.pushTodo} />
					{!!model.todos.length && (
						<ActionsButtons
							onClickClear={() => model.setTodos([])}
							onClickClearCompleted={model.clearCompletedTodos}
							isActive={!!model.countCompletedTodos()}
						/>
					)}
					<Todolist
						todos={model.todos}
						countCompletedTodos={model.countCompletedTodos}
						deleteTodo={model.deleteTodo}
						setIsCompleted={model.toggleIsCompleted}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
