import React from 'react';

class Table extends React.Component {

	render() {
		return (
			<div className="table-bx">
				<table className="table table-striped">
				  <thead>
				    <tr>
				      <th colSpan="2">User</th>
				      <th>Commit</th>
				      <th>Date</th>
				      <th></th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td className="w-1"><span className="avatar"></span></td>
				      <td>Ronald Bradley</td>
				      <td>Initial commit</td>
				      <td className="text-nowrap">May 6, 2018</td>
				      <td className="w-1"><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
				    </tr>
				    <tr>
				      <td><span className="avatar"></span></td>
				      <td>Russell Gibson</td>
				      <td>Main structure</td>
				      <td className="text-nowrap">April 22, 2018</td>
				      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
				    </tr>
				    <tr>
				      <td><span className="avatar"></span></td>
				      <td>Beverly Armstrong</td>
				      <td>Left sidebar adjustments</td>
				      <td className="text-nowrap">April 15, 2018</td>
				      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
				    </tr>
				    <tr>
				      <td><span className="avatar"></span></td>
				      <td>Bobby Knight</td>
				      <td>Topbar dropdown style</td>
				      <td className="text-nowrap">April 8, 2018</td>
				      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
				    </tr>
				    <tr>
				      <td><span className="avatar"></span></td>
				      <td>Sharon Wells</td>
				      <td>Fixes #625</td>
				      <td className="text-nowrap">April 9, 2018</td>
				      <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
				    </tr>
				  </tbody>
				</table>
			</div>
		)
	}
}

export default Table;
