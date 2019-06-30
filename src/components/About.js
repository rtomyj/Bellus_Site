import 'typeface-roboto'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import roseImage from '../res/about_rose.png'
import { deepOrange } from '@material-ui/core/colors';

const styles = {
	summaryText: {
	},
	heading: {
		marginBottom: '15px',
		color: deepOrange['300']
	},
	firstHeading: {
		margin: '8px'
	},
	otherHeading: {
		marginTop: '65px'
	},
	roseImage: {
		height: '600px',
		align: 'center',
	}
}

class About extends Component {
	state = {

	}

	render() {
		const { classes } = this.props

		const temp = {
			marginTop: '300px'
		}

		return (
		<div className={classes.text}>
			<img src={roseImage} className={classes.roseImage}/>
			
			<Grid container direction='row' xs='10' className={classes.otherHeading}>
				<Grid item xs='3'>
					<Typography 
						variant='h4' 
						className={[classes.heading, classes.firstHeading].join(' ')} >
						Rose Gomez - The Artist
					</Typography>
				</Grid>

				<Grid item xs>
					<Typography 
						className={classes.summaryText} 
						variant='subtitle1' >
						Mother of three with years of experience with cosmetic products as well as cosmetology. Starting as a cosmetics sales woman, I began professionally doing peoples make up to earn extra income. With seven plus years of experience I am the person to book for weddings, parties and anything else that needs an elegant touch.
					</Typography>
				</Grid>

			</Grid>

			<Typography 
				variant='h4' 
				className={[classes.heading, classes.otherHeading].join(' ')} >
				Contact Us
			</Typography>
		</div>
		)
	}
}


About.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About)