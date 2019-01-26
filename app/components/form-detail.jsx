import React from 'react';

class FormDetail extends React.Component {
	render() {
		const { items, onBack } = this.props;
		return (
			<div className="form-bx">
				<div className="col">
					<div className="row">
						<div className="form-group">
							<label className="form-label">Text</label>
							<input type="text" className="form-control" name="text-input" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FormDetail;
