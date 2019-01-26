'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './../components/loading.jsx';
import Table from './../components/table.jsx';
import Card from './../components/card.jsx';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Loading />
				<Table />
				<Card />
				hello world
			</div>
		)
	}
}

function select(state) {
	return state;
}

export default connect(select)(App);