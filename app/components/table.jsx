import React from 'react';
import moment from 'moment';

class Table extends React.Component {

	render() {
		const { items, onManage } = this.props;
		return (
			<div className="table-bx">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Time</th>
							<th>Category</th>
							<th>Platform</th>
							<th>Location</th>
							<th>Photos</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{items.map((x, indx) => {
							return (<tr key={indx}>
								<td className="text-nowrap">{moment(x.timestamp).format('YYYY/MM/DD HH:mm:ss')}</td>
								<td>{x.landobservations.map(x => x.landuse).join(',')}</td>
								<td>
									<strong>{x.platform.device}</strong><br />
									<small>{x.platform.osversion}</small>	
								</td>
								<td>
									{x.location.lat}<br />
									{x.location.lon}
								</td>
								<td>
									{x.photos.map(x => x.direction).join(',')}
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
