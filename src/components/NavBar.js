import 'typeface-roboto'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';

import { Typography, Toolbar, AppBar, Button, createMuiTheme } from '@material-ui/core';
import { grey, deepPurple } from '@material-ui/core/colors'

const styles = createMuiTheme({
	bar: {
		background: deepPurple['500'],
	},
	grow: {
		flexGrow: 1,
	},
	barTextColor: {
		color: grey[100]
	},
	theCurrentPage: {
		background: deepPurple[400],
	}
});

class NavBar extends Component {
	constructor() {
		super()
		this.state = {
			menuAnchor: null,
		}
	}


	render() {

		const { classes } = this.props;

		return(
			<AppBar position='static' className={[classes.grow, classes.bar].join(' ')} >
				<Toolbar>
					<Typography className={[classes.barTextColor, classes.grow].join(' ')} variant='h6' >Bellus Cosmetology Services</Typography>

					<Button 
						color='inherit' 
						className={this.props.currentPage === 'Home' ? classes.theCurrentPage : null} 
						onClick={() => {this.props.switchPage('Home') }} >
					Home
					</Button>

					<Button 
						color='inherit' 
						className={this.props.currentPage === 'Gallery' ? classes.theCurrentPage : null} 
						onClick={() => {this.props.switchPage('Gallery') }} >
						Gallery
					</Button>

					<Button 
						color='inherit' 
						className={this.props.currentPage === 'Appointments' ? classes.theCurrentPage : null} 
						onClick={() => {this.props.switchPage('Appointments') }} >
						Appointments
					</Button>

					<Button 
						color='inherit' 
						className={this.props.currentPage === 'About' ? classes.theCurrentPage : null} 
						onClick={() => {this.props.switchPage('About') }} >
						About
					</Button>

				</Toolbar>
			</AppBar>
		)
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBar)