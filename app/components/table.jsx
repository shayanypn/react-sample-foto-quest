import React from 'react';
import moment from 'moment';
import MarkerIcon from '../assets/marker.png';
import { DeviceIcon } from '../utils.js';


class Table extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			orderASC: true,
			orderField: null,
			items: props.items || []
		}
	}

	onOrder(field) {
		let { items, orderASC, orderField } = this.state;

		if (orderField == field && orderASC) {
			orderASC = !orderASC;
		} else if (orderField == field && !orderASC) {
			orderField = null;
			orderASC = true;
		} else {
			orderField = field;
			orderASC = true;
		}

		items.sort((a, b) => {
			let sortResult = 1;
			switch(orderField){
				case 'time':
					sortResult = (new Date(a.timestamp)).getTime() - (new Date(b.timestamp)).getTime() > 0 ? -1 : 1;
					break;
			}
			return orderASC ? (sortResult * -1) : sortResult;
		});


		this.setState({
			orderASC: orderASC,
			orderField: orderField,
			items: items,
		})
	}

	render() {
		const { onManage } = this.props;
		const { items, orderField, orderASC } = this.state;
		return (
			<div className="table-bx">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>
								<span
									className={`${orderField == 'time' ? (orderASC ? 'col-sort sort-asc' : 'col-sort sort-desc') : ''}`}
									onClick={e => this.onOrder('time') }>Time</span>
							</th>
							<th>Category</th>
							<th>Platform</th>
							<th>Location</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{items.map((x, indx) => {
							return (<tr key={indx}>
								<td className="text-nowrap">{moment(x.timestamp).format('YYYY/MM/DD HH:mm:ss')}</td>
								<td>{x.landobservations.map(x => x.landuse).join(',')}</td>
								<td>
									<img src={DeviceIcon(x.platform.device)} className="icon" />
									<strong>{x.platform.device}</strong><small>({x.platform.osversion})</small>	
								</td>
								<td>
									<img src={MarkerIcon} className="icon" />
									{x.location.lat}/{x.location.lon}
								</td>
								<td>
									<a href="javascript:void(0)"
										onClick={() => onManage(x)}
										className="btn btn-sm btn-info">Manage</a>
								</td>
							</tr>)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;
