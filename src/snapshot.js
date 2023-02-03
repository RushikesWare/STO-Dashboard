import React from 'react';
import './snapshot.css';
import MockData from '../src/json_server/MockData.json'
import Button from '@mui/material/Button';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	Link,
	useNavigate
} from 'react-router-dom';
function Snapshot(props) {
    const navigate = useNavigate();

	const location = useLocation();
	const headerName = location.state?.headerName;
	const rows = [
		[{ name: 'Systems' }, { name: 'Availability', status: 'success', isLink: true, isLink: true }, { name: 'Performance', status: 'success', isLink: true, isLink: true }, { name: 'Capacity', status: 'success', isLink: true }, { name: 'Security', status: 'warning', isLink: true }],
		[{ name: 'Operational' }, { name: 'P1/P2 Incidents', status: 'success', isLink: true }, { name: 'RCAs', status: 'success', isLink: true }, { name: 'Risks', status: 'success', isLink: true }, { name: 'Issues', status: 'warning', isLink: true }],
		[{ name: 'Maintenance' }, { name: 'PKEs', status: 'success', isLink: true }, { name: 'App patching', status: 'success', isLink: true }, { name: 'OS patching', status: 'success', isLink: true }, { name: 'DB patching', status: 'warning', isLink: true }],
		[{ name: 'Miscellaneous' }, { name: 'Deployment Roadmap', status: 'success', isLink: true }, { name: 'Health Checks', status: 'success', isLink: true }, { name: 'L2/L3 Support', status: 'success', isLink: true }, { name: 'EOL/EOS', status: 'warning', isLink: true }]
	];
	let trList = [];
	for (const [i, row] of rows.entries()) {
		let tdList = [];
		for (const [i, col] of row.entries()) {
			let td = [];

			if (col.status) {
				td.push(<span className={'StatusIcon ' + col.status}></span>);
			}

			if (col.isLink) {

				td.push(<label>
					<Link to={col.name}>{col.name}</Link>
				</label>)
			} else {
				td.push(<label>
					{col.name}
				</label>)
			}

			tdList.push(<td>
				{td}
			</td>)
		}
		trList.push(<tr>{tdList}</tr>);
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center', paddingTop:'20px'}}>Application {headerName} Snapshot</h1>
			<table>
				<tbody>
					{trList}
				</tbody>
			</table>
			<div>
				{MockData && MockData.map(data => {
					if (data.pageName === "Snapshot") {
						return (
							<div className='defination'>
								<table className='availblityTable'>
									<tbody key={data.ragDefinition.Red.id}>
									
										<tr>
											<td><span className={data.ragDefinition.Red.color}></span></td>
											<td>{data.ragDefinition.Red.definition}</td>
										</tr>
										<tr>
											<td> <span className={data.ragDefinition.Yellow.color}></span></td>
											<td>{data.ragDefinition.Yellow.definition}</td>
										</tr>
										<tr>
											<td> <span className={data.ragDefinition.Green.color}></span></td>
											<td>{data.ragDefinition.Green.definition}</td>
										</tr>
									</tbody>
								</table>
								<Button variant="contained" className='guidelineBtn' onClick={() => navigate("/RAG-Definitions")}>RAG Definitions</Button>
							</div>
						)
					}
				})}
			</div>
		</div>
	);
}

export default Snapshot;
