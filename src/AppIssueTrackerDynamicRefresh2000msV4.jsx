const contentNode = document.getElementById('contents');

const issues = [
		{
			id:1, status:'Open', owner:'John',
			created: new Date('2018-01-15'), effort:5, completionDate:undefined,
			title:'Error in console when clicking Add',
		},
		{
			id:2, status:'Assigned', owner:'Eric',
			created: new Date('2018-02-20'), effort:10, completionDate:new Date('2018-03-10'),
			title:'Missing bottom border on panel',
		},
		];

class IssueFilter extends React.Component {
	render(){
		return(
			<div>This is a placeholder for Issue Filter.</div>
			);
		}
	}

class IssueRow extends React.Component {
	render() {
		const issue=this.props.issue;
		return (
			<tr>
				<td>{issue.id}</td>
				<td>{issue.status}</td>
				<td>{issue.owner}</td>
				<td>{issue.created.toDateString()}</td>
				<td>{issue.effort}</td>
				<td>{issue.completionDate ?
				     issue.completionDate.toDateString() : ''}</td>
				<td>{issue.title}</td>
			</tr>
			)
	}
}

class IssueTable extends React.Component {
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 6};
		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
		return(
			<table className="bordered-table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Status</th>
						<th>Owner</th>
						<th>Created</th>
						<th>Effort</th>
						<th>Completion Date</th>
						<th>Title</th>
					</tr>
				</thead>

				<tbody>{issueRows}</tbody>
			</table>
			)
		}
	}

class IssueAdd extends React.Component {
	render(){
		return(
			<div>This is a placeholder for an Add entry of Issue.</div>
			);
		}
	}

class IssueList extends React.Component {
	constructor() {
		super();
		this.state = { issues: issues };
		setTimeout(this.createTestIssue.bind(this), 2000);
		}

createIssue(newIssue) {
	const newIssues = this.state.issues.slice();
	newIssue.id = this.state.issues.length + 1;
	newIssues.push(newIssue);
	this.setState({ issues: newIssues });
}

createTestIssue(){
this.createIssue({
	status:'New', owner: 'Peter', created:new Date(),
	title:'Completion date should be optional',
	});
}

render() {
	return( 
		<div>
			<h1>Issue Tracker</h1>
			<IssueFilter/>
			<hr />
			<IssueTable issues={this.state.issues} />
			<hr />
			<IssueAdd />
		</div>
	);
}	
}

ReactDOM.render(<IssueList />, contentNode);
