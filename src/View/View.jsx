import Form from './Components/Form';
import Todolist from './Components/Todolist';
import ActionsButtons from './Components/ActionsButtons';
import './CSS/null.css';
import './CSS/App.css';

function View({ todos }) {
	return (
		<div className='App'>
			<nav>
				<div className='nav__container'>
					<a href='#'>My projects</a>
					<a href='#'>My Todos</a>
					<a href='#'>My profile</a>
				</div>
			</nav>
			<div className='container__todos'>
				{/* <Form /> */}
				{/* <ActionsButtons /> */}
				<Todolist todos={todos} />
			</div>
		</div>
	);
}

export default View;
