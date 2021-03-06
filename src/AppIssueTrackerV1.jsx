const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
	render(){
		return(
			<div>This is a placeholder for Issue Filter.</div>
			);
		}
	}

class IssueTable extends React.Component {
	render(){
		return(
			<div>This is a placeholder for the table of Issue List.</div>
			);
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
