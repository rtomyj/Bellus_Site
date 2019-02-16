import 'typeface-roboto'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles';

import { Typography, Menu, MenuItem, MenuList, IconButton, Toolbar, AppBar } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey'

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	barTextColor: {
		color: grey[100],
		variant: 'subtitle1'
	},
};

class NavBar extends Component {
	constructor() {
		super()
		this.state = {
			menuAnchor: null,
		}

		this.menuItemClick = this.menuItemClick.bind(this)
		this.menuClick = this.menuClick.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
	}


	menuClick(event) {
		this.setState({
			menuAnchor: event.currentTarget
		})
		console.log('i work')
	}

	menuItemClick() {
		this.setState({
			menuAnchor: null,
		})

	}

	closeMenu(event) {
		this.setState({
			menuAnchor: null,
		})
	}


	render() {

		const { classes } = this.props;

		return(
			<AppBar position='static'>
				<Toolbar>
					<IconButton 
						className={classes.menuButton} 
						color="inherit" 
						aria-owns={this.state.menuAnchor ? 'simple-menu' : undefined}
						aria-haspopup="true"
						onClick={this.menuClick}
						>

							<MenuIcon />

					</IconButton>

					<Menu
						id='nav-menu'
						open={Boolean(this.state.menuAnchor)}
						anchorEl={this.state.menuAnchor}
						onClose={this.closeMenu} >

						<MenuItem onClick={this.menuItemClick}>Home</MenuItem>
						<MenuItem onClick={this.menuItemClick}>Gallery</MenuItem>
						<MenuItem onClick={this.menuItemClick}>Book An Appointment</MenuItem>
						<MenuItem onClick={this.menuItemClick}>About</MenuItem>
					</Menu>
					
					<Typography className={classes.barTextColor} variant='h6' >Bellus Cosmetology Services</Typography>

				</Toolbar>
			</AppBar>
		)
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBar)