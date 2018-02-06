import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div id="home" className="home">Home</div>
		);
	}
}

Home.propTypes = {
};
