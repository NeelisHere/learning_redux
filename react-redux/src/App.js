import './App.css';
import { Provider } from 'react-redux'
import {store} from './store';
// import Counter from './components/Counter';
// import Point from './components/Point';
import Todos from './components/Todos';

function App() {
    
    return (
        <div className="App">
			<Provider store={store}>
                {}
				{/* <Counter /> */}
				{/* <Point /> */}
                <Todos/>
			</Provider>
        </div>
    );
}

export default App;
