import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles';

import 'typeface-roboto'
import { Typography } from '@material-ui/core';
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

class NavBar extends Component{
	constructor() {
		super()
		this.state = {

		}
	}


	render() {

		const { classes } = this.props;
		console.log(this.props)

		return(
			<AppBar>
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography className={classes.barTextColor} variant='h6' >Bellus Cosmetics</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBar)