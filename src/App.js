import model from './model/model';
import View from './View/View.jsx';
import controllerContext from './controller/context/controllerContext';
import controller from './controller/controller';

function App() {
	model.InitState();

	return (
		<controllerContext.Provider value={controller}>
			<View todos={model.todos} />;
		</controllerContext.Provider>
	);
}

export default App;
