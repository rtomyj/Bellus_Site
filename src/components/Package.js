import 'typeface-roboto'

import React, { Component } from 'react'
import propTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


const styles = 
{
	heading: {
		marginBottom: '15px',
		color: deepOrange['300']
	},
}

class Package extends Component
{

	render()
	{
		const { classes } = this.props
		console.log(classes)

		return(
			<div>
				<Typography variant='h6'>
					{this.props.packageName}
				</Typography>
				<Typography >
					{this.props.packageDesc}
				</Typography>
				<Typography >
					{this.props.packagePrice}
				</Typography>
			</div>
		)
	}
}

Package.propTypes = 
{
	classes: propTypes.object.isRequired,
}
export default withStyles(styles)(Package)