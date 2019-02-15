import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './NavBar.js'


class Home extends React.Component{

	render() {
		return(
			<NavBar />
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))

/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
