const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
	render(){
		return(
			<div>This is a placeholder for Issue Filter.</div>
			);
		}
	}

class IssueRow extends React.Component {
	render() {
		const borderedStyle = {border: "1px solid silver", padding: 4};
		return (
			<tr>
				<td style={borderedStyle}>{this.props.issue_id}</td>
				<td style={borderedStyle}>{this.props.issue_title}</td>
			</tr>
			)
	}
}

class IssueTable extends React.Component {
	render(){
		const borderedStyle = {border: "1px solid silver", padding: 6};
		return(
			<table style={{borderedStyle : "collapse"}}>
				<thead>
					<tr>
						<th style={borderedStyle}>Id</th>
						<th style={borderedStyle}>Title</th>
					</tr>
				</thead>

				<tbody>
					<IssueRow issue_id={1}
					issue_title="Error in console when clicking Add" />
					<IssueRow issue_id={2}
					issue_title="Missing bottom border on panel" />
				</tbody>
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
	render() {
		return (
			<div>
				<h1>Issue Tracker</h1>
					<IssueFilter />
					<hr />
					<IssueTable />
					<hr />
					<IssueAdd />
			</div>
			);
		}
	}

ReactDOM.render(<IssueList />, contentNode);      // Render the component inside the content Node
