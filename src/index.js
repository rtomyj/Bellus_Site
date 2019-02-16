import 'typeface-roboto'
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.js'
import About from './components/About.js'



class Home extends React.Component{

	render() {
		return(
			<div >
				<NavBar />
				<br />

				<About />
			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))