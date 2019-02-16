import 'typeface-roboto'
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.js'
import About from './components/About.js'



class Home extends React.Component{
	constructor() {
		super()
		this.state = {
			currentPage: 'About'
		}
	}

	render() {
		return(
			<div >
				<NavBar />
				<br />

				{this.state.currentPage === 'About' ? <About /> : null}
				<p>test string</p>
			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))