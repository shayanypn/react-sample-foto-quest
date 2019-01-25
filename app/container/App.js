'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="container">
				hello world
			</div>
		)
	}
}

function select(state) {
	return state;
}

export default connect(select)(App);