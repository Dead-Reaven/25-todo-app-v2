import Form from './Components/Form';
import Todolist from './Components/Todolist';
import ActionsButtons from './Components/ActionsButtons';

import './CSS/null.css';
import './CSS/App.css';
import './CSS/nav.css';
import './CSS/scroll-bar.css';

function View({ todos }) {
	return (
		<div className='App'>
			<header>
				<nav className='shadow'>
					<div className='content nav__container'>
						<ActionsButtons />
					</div>
				</nav>
			</header>
			<main>
				<div className='content'>
					<Todolist todos={todos} />
					<Form />
				</div>
			</main>
		</div>
	);
}

export default View;
