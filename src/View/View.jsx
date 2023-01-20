import Form from './Components/Form';
import Todolist from './Components/Todolist';
import ActionsButtons from './Components/ActionsButtons';
import './CSS/null.css';
import './CSS/App.css';

function View({ todos }) {
	return (
		<div className='App'>
			<div className='container'>
				<div className='todo'>
					<Form />
					<ActionsButtons />
					<Todolist todos={todos} />
				</div>
			</div>
		</div>
	);
}

export default View;
