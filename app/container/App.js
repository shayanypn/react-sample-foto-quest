'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './../components/loading.jsx';
import Table from './../components/table.jsx';
import Card from './../components/card.jsx';
import FormDetail from './../components/form-detail.jsx';

const DATA = [
	{
		"id": "1",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "iPhone X",
			"osversion": "iOS 10"
		},
		"timestamp": "2017-10-14T12:11:20+0000",
		"location": {
			"lat": "48.058439",
			"lon": "16.351187"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b8526961b2f5817219387.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b8526962549e073231202.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b8526962fa02717727146.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b85269637948776927769.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b8526963fc77082988106.jpg"
		}],
		"landobservations": [{
			"landcover": "cropland",
			"landuse": "agriculture"
		}]
	}, {
		"id": "2",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "Android",
			"osversion": "5.2"
		},
		"timestamp": "2017-10-14T15:36:48+0000",
		"location": {
			"lat": "50.466246",
			"lon": "9.433275"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b6849119a510484973592.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b68491175acb404632851.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b68491188113562207580.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b6849118e2f2841230285.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b684911943f4953654881.jpg"
		}],
		"landobservations": [{
			"landcover": "grassland",
			"landuse": "agriculture"
		}]
	}, {
		"id": "3",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "Android",
			"osversion": "5.7"
		},
		"timestamp": "2017-10-15T08:02:17+0000",
		"location": {
			"lat": "48.375409",
			"lon": "9.199155"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b224e10c5dfb064938638.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b224e10e249e823733506.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b224e10e8701543004977.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b224e10ee7aa928120134.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b224e110083d757136551.jpg"
		}],
		"landobservations": [{
			"landcover": "artificial",
			"landuse": "street"
		}]
	}, {
		"id": "4",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "iPhone 8",
			"osversion": "iOS 11"
		},
		"timestamp": "2017-10-17T10:49:00+0000",
		"location": {
			"lat": "46.381991",
			"lon": "11.922574"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b893bd19c6f8040608083.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b893bd1aecaf002390862.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b893bd1b4d60572569763.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b893bd1c7398316701297.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201808/5b893bd1cd3f1356694784.jpg"
		}],
		"landobservations": [{
			"landcover": "water",
			"landuse": "recreation"
		}]
	}, {
		"id": "5",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "iPhone X",
			"osversion": "iOS 10"
		},
		"timestamp": "2017-10-18T16:31:09+0000",
		"location": {
			"lat": "49.042369",
			"lon": "14.865622"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b1a7a9305db4429257732.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b1a7a92d3574992359955.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b1a7a92e18a4718723111.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b1a7a92e9b97205909039.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201806/5b1a7a92f1cf9895267094.jpg"
		}],
		"landobservations": [{
			"landcover": "artificial",
			"landuse": "residential"
		}]
	}, {
		"id": "6",
		"platform": {
			"app": "15",
			"appversion": "2.6",
			"device": "Android",
			"osversion": "8.12"
		},
		"timestamp": "2017-10-19T13:12:11+0000",
		"location": {
			"lat": "48.953621",
			"lon": "13.497860"
		},
		"photos": [{
			"direction": "ground",
			"url": "https://www.geo-wiki.org/assets/upload/201809/5ba7b7ae3faad481469989.jpg"
		}, {
			"direction": "north",
			"url": "https://www.geo-wiki.org/assets/upload/201809/5ba7b7ae23362650234097.jpg"
		}, {
			"direction": "east",
			"url": "https://www.geo-wiki.org/assets/upload/201809/5ba7b7ae296dc572551626.jpg"
		}, {
			"direction": "south",
			"url": "https://www.geo-wiki.org/assets/upload/201809/5ba7b7ae2f690340803872.jpg"
		}, {
			"direction": "west",
			"url": "https://www.geo-wiki.org/assets/upload/201809/5ba7b7ae39a02034585331.jpg"
		}],
		"landobservations": [{
			"landcover": "cropland",
			"landuse": "agriculture"
		}]
	}
];

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selcetedItem: null,
			loading: false,
		}
	}
	onManage(item){
		this.setState({
			selcetedItem: item
		})
	}
	onBack(){
		this.setState({
			selcetedItem: null
		})
	}
	render() {
		const { loading, selcetedItem } = this.state;

		return (
			<div className="container">
				{loading ? <Loading /> : ''}
				{selcetedItem ? (<Card title="Check Entery Details" 
						option={{
							label: 'Bak to List',
							action: this.onBack.bind(this)
						}}
						noBody={true}>
					<FormDetail 
						item={selcetedItem}
						onBack={this.onBack.bind(this)}
						/>
				</Card>) : (<Card title="List Of Photos" noBody={true}>
					<Table items={DATA} onManage={this.onManage.bind(this)} />
				</Card>)}
			</div>
		)
	}
}

function select(state) {
	return state;
}

export default connect(select)(App);