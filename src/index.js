import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './css/index.css';

import NavBar from './components/NavBar.js'
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';



const styles = {
	summaryText: {
		marginLeft: '15px'
	}
}

class Home extends React.Component{

	render() {
		const { classes } = this.props
		return(
			<div styles='max-width: 1500px; margin: auto;'>
				<NavBar />
				<br />
				<Typography variant='h4'>Rose Gomez (Artist)</Typography>
				<Typography className={classes.summaryText} >Mother of three with years of experience with cosmetic products as well as cosmetology </Typography>
			</div>
		)
	}
}

ReactDOM.render(<Home />, document.getElementById('root'))

Home.PropTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)