import React from 'react';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Map from './map.jsx';
const axios = require('axios');


class FormDetail extends React.Component {

	onSubmit(){
		axios.post('https://demo0929535.mockable.io/evaluate', {
			evaluation: "2",
			comment: "Photos are too dark"
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		const { item, onBack } = this.props;

		if (!item) {
			return (<div />);
		}


		return (
			<div className="form-bx">
				<div className="row">
					<div className="col">
						

						<table className="table card-table">
							<tbody>
								<tr>
									<td width="1"></td>
									<td>Time</td>
									<td className="text-text">{moment(item.timestamp).format('YYYY/MM/DD HH:mm:ss')}</td>
								</tr>
								<tr>
									<td></td>
									<td>Platform</td>
									<td className="text-text">
										Device: <b>{item.platform.device}</b><br />
										OS Version: <b>{item.platform.osversion}</b><br />
										App Version: <b>{item.platform.appversion}</b><br />
									</td>
								</tr>
								<tr>
									<td></td>
									<td>Category</td>
									<td className="text-left">
										{item.landobservations.map(x=> x.landuse).join(', ')}
									</td>
								</tr>
								<tr>
									<td></td>
									<td>Location</td>
									<td className="text-left">
										Lat: {item.location.lat}<br />
										Lon: {item.location.lon}
									</td>
								</tr>
							</tbody>
						</table>


					</div>
					<div className="col">
						<div className="form-submit-bx">
							<div className="form-group text-right">
								<button className="btn btn-primary"> Click </button>
							</div>
							<div className="form-group">
								<label className="form-label">Choose</label>
								<select className="form-control">
									<option>Approved</option>
									<option>Rejected because of photos</option>
									<option>Rejected because of classifications</option>
									<option>Rejected because of location</option>
									<option>Rejected</option>
								</select>
							</div>
							<div className="form-group">
								<label className="form-label">Comment</label>
								<textarea className="form-control" />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col photos-bx">
						<div className="row">
							<div className="col"></div>
							<div className="col-5"><img className="w-100" src="https://www.geo-wiki.org/assets/upload/201808/5b8526961b2f5817219387.jpg" /></div>
							<div className="col"></div>	
						</div>
						<div className="row">
							<div className="col-5">
							    <LazyLoadImage 
							    	className="w-100" 
							    	src="https://www.geo-wiki.org/assets/upload/201808/5b8526961b2f5817219387.jpg" />
							</div>
							<div className="col-2"></div>
							<div className="col-5"><img className="w-100" src="https://www.geo-wiki.org/assets/upload/201808/5b8526961b2f5817219387.jpg" /></div>
						</div>
						<div className="row">
							<div className="col"></div>
							<div className="col-5"><img className="w-100" src="https://www.geo-wiki.org/assets/upload/201808/5b8526961b2f5817219387.jpg" /></div>
							<div className="col"></div>
						</div>
					</div>
					<div className="col">
						<Map />
					</div>
				</div>
			</div>
		)
	}
}

export default FormDetail;
