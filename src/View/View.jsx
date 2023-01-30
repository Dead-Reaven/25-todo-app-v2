import Form from './Components/Form';
import Todolist from './Components/Todolist';
import ActionsButtons from './Components/ActionsButtons';

import './CSS/App.css';
import './CSS/header.css';
import './CSS/main.css';
import './CSS/footer.css';
import './CSS/scroll-bar.css';
import './CSS/null.css';

function View({ todos }) {
	return (
		<div className='App'>
			<header>
				<nav className='shadow'>
					<div className='content nav__container '>
						<ActionsButtons />
					</div>
				</nav>
			</header>

			<main className='content'>
				<Todolist todos={todos} />
			</main>

			<footer className='content'>
				<Form />
			</footer>
		</div>
	);
}

export default View;
