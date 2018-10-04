import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

render(
	<Router>
		<Provider store={createStoreWithMiddleware(Reducers)}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
