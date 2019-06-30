import 'typeface-roboto'
import './css/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.js'
import About from './components/About.js'
import Appointments from './components/Appointments.js'
import Gallery from './components/Gallery.js'

import Package from './components/Package'

import { Typography } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


class Home extends Component{
	state = {
		currentPage: 'Home'
	}

	setDefaultView = () => 
	{
		const packages = 
		{
			"Single": 
			{
				"price": 80,
				"desc": "One person job that includes lashes"
			},
	
			"Group": 
			{
				"price": 60,
				"desc": "That is 60 per person. Save money by grouping."
			},
	
			"Wedding - Bride": 
			{
				"price": 150,
				"desc": "Above and beyond look for you big day."
			},
	
			"Wedding - Group": 
			{
				"price": '',
				"desc": "Prices vary."
			}
		}

		const Packages = Object.keys(packages).map((p) =>
		{
			return(
				<Package packageName={p} packagePrice={packages[p].price} packageDesc={packages[p].desc} />
			)
		})

		return(
			<div>
				<Typography variant='h4' >
					Packages
				</Typography>
				<br />

				{Packages}
			</div>
		)
	}

	switchPage = (newPage) => {
		this.setState({
			currentPage: newPage
		})
	}

	render() {
		const wrapper ={
			marginTop: '15px'
		}
		const classes = 
		{
			heading:
			{
				marginBottom: '15px',
				color: deepOrange['300']
			}
		}
		

		return(
			<div >
				<NavBar 
					switchPage={this.switchPage} 
					currentPage={this.state.currentPage}
				/>

				<div style={wrapper} >			
					{this.state.currentPage === 'Home' ? withStyles(classes)(this.setDefaultView()) : null}
					{this.state.currentPage === 'About' ? <About /> : null}
					{this.state.currentPage === 'Appointments' ? <Appointments /> : null}
					{this.state.currentPage === 'Gallery' ? <Gallery /> : null}
				</div>

			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))
