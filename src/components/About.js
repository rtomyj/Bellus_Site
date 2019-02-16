import 'typeface-roboto'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import roseImage from '../res/about_rose.png'

const styles = {
	summaryText: {
		marginLeft: '10px',
	},
	heading: {
		marginBottom: '5px'
	},
	roseImage: {
		height: '350px',
		width: '270px'
	}
}

class About extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		const { classes } = this.props

		return (
		<div className={classes.text}>
			<img src={roseImage} className={classes.roseImage}/>
			<Typography variant='h4' className={classes.heading} >Rose Gomez (Artist)</Typography>
			<Typography className={classes.summaryText} >Mother of three with years of experience with cosmetic products as well as cosmetology. Starting as a cosmetics sales woman, I began professionally doing peoples make up to earn extra income. With seven plus years of experience I am the person to book for weddings, parties and anything else that needs an elegant touch.</Typography>
		</div>
		)
	}
}


About.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About)