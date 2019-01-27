'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './../components/loading.jsx';
import Table from './../components/table.jsx';
import Card from './../components/card.jsx';
import FormDetail from './../components/form-detail.jsx';
const axios = require('axios');

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selcetedItem: null,
			loading: false,
			view: null,
			items: []
		}
	}
	onManage(item){
		this.setState({
			view: 'form',
			selcetedItem: item
		})
	}
	onBack(){
		this.setState({
			view: 'list',
			selcetedItem: null
		})
	}
	onLoading(loading){
		this.setState({
			loading: loading
		});
	}
	componentDidMount() {
		this.onLoading(true);


		axios.get('https://api.myjson.com/bins/jpfmg')
		.then( response => {
			this.onLoading(false);
			this.setState({
				items: response.data,
				view: 'list'
			});
		})
		.catch( error => {
			this.onLoading(false);
			console.log(error);
			toastr.error('Problem on your operation, please try again later!');
		});
	}
	render() {
		const { view, loading, selcetedItem } = this.state;
		

		return (
			<div className="container">
				{loading ? <Loading /> : ''}
				{view == 'form' ? (<Card title="Check Entery Details" 
						option={{
							label: 'Bak to List',
							action: this.onBack.bind(this)
						}}
						noBody={true}>
					<FormDetail 
						item={selcetedItem}
						onBack={this.onBack.bind(this)}
						onLoading={this.onLoading.bind(this)}
						/>
				</Card>) : '' }
				{view == 'list' ? (<Card title="List Of Photos" noBody={true}>
					<Table
						items={this.state.items}
						onManage={this.onManage.bind(this)}
						/>
				</Card>) : ''}
			</div>
		)
	}
}

function select(state) {
	return state;
}

export default connect(select)(App);