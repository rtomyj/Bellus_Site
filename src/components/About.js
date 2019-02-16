import 'typeface-roboto'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	summaryText: {
		marginLeft: '10px',
	},
	heading: {
		marginBottom: '5px'
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
			<Typography variant='h4' className={classes.heading} >Rose Gomez (Artist)</Typography>
			<Typography className={classes.summaryText} >Mother of three with years of experience with cosmetic products as well as cosmetology This lets us know whether the currently selected friend is online. If we pick a different friend and update the recipientID state variable, our useFriendStatus Hook will unsubscribe from the previously selected friend, and subscribe to the status of the newly selected one.</Typography>
		</div>
		)
	}
}


About.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About)