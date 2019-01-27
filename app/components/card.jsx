import React from 'react';

class Card extends React.Component {
	render() {
		const { title, children, noBody, option } = this.props;
		return (
			<div className="card-bx">
				{title ? (<div className="card-header">
					<h5 className="card-title">{title}</h5>
					{option ? (<div className="card-options">
						<a href="#"
							onClick={option.action} className="btn btn-secondary btn-sm ml-2">{option.label}</a>
					</div>) : '' }
				</div>) : ''}
				<div className={`${noBody ? '' : 'card-body'}`}>
					{children}
				</div>
			</div>
		)
	}
}

export default Card;
