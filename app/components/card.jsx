import React from 'react';

class Card extends React.Component {
	render() {
		const { title, children, noBody } = this.props;
		return (
			<div className="card-bx">
				{title ? (<div className="card-header">
					<h5 className="card-title">{title}</h5>
				</div>) : ''}
				<div className={`${noBody ? '' : 'card-body'}`}>
					{children}
				</div>
			</div>
		)
	}
}

export default Card;
