import React from 'react';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Map from './map.jsx';
const axios = require('axios');

import MobileIcon from '../assets/mobile.png';
import MarkerIcon from '../assets/marker.png';
import FolderIcon from '../assets/folder.png';
import ClockIcon from '../assets/clock.png';
import CameraIcon from '../assets/camera.png';

import AndroidIcon from '../assets/android.png';
import IOSIcon from '../assets/ios.png';

class FormDetail extends React.Component {

	onSubmit(){

		if (!this.comment.value) {
			return;
		}
		if (!this.evaluation.value) {
			return;
		}

		axios.post('https://demo0929535.mockable.io/evaluate', {
			evaluation: this.evaluation.value,
			comment: this.comment.value
		})
		.then( response => {
			console.log(response);
		})
		.catch( error => {
			console.log(error);
		});
	}

	render() {
		const { item, onBack } = this.props;
		const photos = {};
		let DeviceIcon = null;

		if (!item)
			return (<div />);

		item.photos.forEach(x =>{
			photos[x.direction] = x.url;
		});


		if (item.platform.device.toLowerCase().indexOf('android') !== -1) {
			DeviceIcon = AndroidIcon;
		}else if (item.platform.device.toLowerCase().indexOf('iphone') !== -1) {
			DeviceIcon = IOSIcon;
		}


		return (
			<div className="form-bx">
				<div className="row">
					<div className="col">
						<table className="table card-table">
							<tbody>
								<tr>
									<td width="1" className="pl-0 pr-0"><img src={ClockIcon} className="icon" /></td>
									<td>Time</td>
									<td className="text-text">{moment(item.timestamp).format('YYYY/MM/DD HH:mm:ss')}</td>
								</tr>
								<tr>
									<td width="1" className="pl-0 pr-0"><img src={MobileIcon} className="icon" /></td>
									<td>Platform</td>
									<td className="text-text">
										Device: {DeviceIcon ? (<img className="icon icon-device" src={DeviceIcon} />) : ''} <b>{item.platform.device}</b><br />
										OS Version: <b>{item.platform.osversion}</b><br />
										App Version: <b>{item.platform.appversion}</b><br />
									</td>
								</tr>
								<tr>
									<td width="1" className="pl-0 pr-0"><img src={FolderIcon} className="icon" /></td>
									<td>Category</td>
									<td className="text-left">
										{item.landobservations.map(x=> x.landuse).join(', ')}
									</td>
								</tr>
								<tr>
									<td width="1" className="pl-0 pr-0"><img src={MarkerIcon} className="icon" /></td>
									<td>Location</td>
									<td className="text-left">
										Lat: {item.location.lat}<br />
										Lon: {item.location.lon}
									</td>
								</tr>
								<tr>
									<td width="1" className="pl-0 pr-0"><img src={CameraIcon} className="icon" /></td>
									<td>Ground</td>
									<td>
										<LazyLoadImage
											className="w-100 rounded"
											src={photos.ground} />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col">
						<div className="form-submit-bx">
							<div className="form-group text-right">
								<button className="btn btn-primary" onClick={this.onSubmit.bind(this)}> Submit Form </button>
							</div>
							<div className="form-group">
								<label className="form-label">Choose</label>
								<select 
									ref={ e => { this.evaluation = e }}
									className="form-control">
									<option value="1">Approved</option>
									<option value="2">Rejected because of photos</option>
									<option value="3">Rejected because of classifications</option>
									<option value="4">Rejected because of location</option>
									<option value="5">Rejected</option>
								</select>
							</div>
							<div className="form-group">
								<label className="form-label">Comment</label>
								<textarea
									className="form-control"
									ref={ e => { this.comment = e }}
									 />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col photos-bx">
						<div className="row d-flex justify-content-center">
							<div className="col-5"><LazyLoadImage className="w-100" src={photos.north} /></div>
						</div>
						<div className="row">
							<div className="col-5"><LazyLoadImage className="w-100" src={photos.east} /></div>
							<div className="col-2"></div>
							<div className="col-5"><LazyLoadImage className="w-100" src={photos.west} /></div>
						</div>
						<div className="row d-flex justify-content-center">
							<div className="col-5"><LazyLoadImage className="w-100" src={photos.south} /></div>
						</div>
					</div>
					<div className="col">
						<Map
							lat={item.location.lat}
							lon={item.location.lon} />
					</div>
				</div>
			</div>
		)
	}
}

export default FormDetail;
