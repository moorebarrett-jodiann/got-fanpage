import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router basename="/got-fanpage" >
			<App />
		</Router>
	</React.StrictMode>
);
