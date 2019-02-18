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

		this.switchPage = this.switchPage.bind(this)
	}

	switchPage(newPage) {
		this.setState({
			currentPage: newPage
		})
	}

	render() {
		const wrapper ={
			marginTop: '15px'
		}


		return(
			<div >
				<NavBar 
					switchPage={this.switchPage} 
					currentPage={this.state.currentPage}
				/>

				<div style={wrapper} >			
					{this.state.currentPage === 'About' ? <About /> : null}
				</div>

			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))