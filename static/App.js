'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var issues = [{
	id: 1, status: 'Open', owner: 'John',
	created: new Date('2018-01-15'), effort: 5, completionDate: undefined,
	title: 'Error in console when clicking Add'
}, {
	id: 2, status: 'Assigned', owner: 'Eric',
	created: new Date('2018-02-20'), effort: 10, completionDate: new Date('2018-03-10'),
	title: 'Missing bottom border on panel'
}];

var IssueFilter = function (_React$Component) {
	_inherits(IssueFilter, _React$Component);

	function IssueFilter() {
		_classCallCheck(this, IssueFilter);

		return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
	}

	_createClass(IssueFilter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'This is a placeholder for Issue Filter.'
			);
		}
	}]);

	return IssueFilter;
}(React.Component);

var IssueRow = function (_React$Component2) {
	_inherits(IssueRow, _React$Component2);

	function IssueRow() {
		_classCallCheck(this, IssueRow);

		return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
	}

	_createClass(IssueRow, [{
		key: 'render',
		value: function render() {
			var issue = this.props.issue;
			return React.createElement(
				'tr',
				null,
				React.createElement(
					'td',
					null,
					issue.id
				),
				React.createElement(
					'td',
					null,
					issue.status
				),
				React.createElement(
					'td',
					null,
					issue.owner
				),
				React.createElement(
					'td',
					null,
					issue.created.toDateString()
				),
				React.createElement(
					'td',
					null,
					issue.effort
				),
				React.createElement(
					'td',
					null,
					issue.completionDate ? issue.completionDate.toDateString() : ''
				),
				React.createElement(
					'td',
					null,
					issue.title
				)
			);
		}
	}]);

	return IssueRow;
}(React.Component);

var IssueTable = function (_React$Component3) {
	_inherits(IssueTable, _React$Component3);

	function IssueTable() {
		_classCallCheck(this, IssueTable);

		return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
	}

	_createClass(IssueTable, [{
		key: 'render',
		value: function render() {
			var borderedStyle = { border: "1px solid silver", padding: 6 };
			var issueRows = this.props.issues.map(function (issue) {
				return React.createElement(IssueRow, { key: issue.id, issue: issue });
			});
			return React.createElement(
				'table',
				{ className: 'bordered-table' },
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'th',
							null,
							'Id'
						),
						React.createElement(
							'th',
							null,
							'Status'
						),
						React.createElement(
							'th',
							null,
							'Owner'
						),
						React.createElement(
							'th',
							null,
							'Created'
						),
						React.createElement(
							'th',
							null,
							'Effort'
						),
						React.createElement(
							'th',
							null,
							'Completion Date'
						),
						React.createElement(
							'th',
							null,
							'Title'
						)
					)
				),
				React.createElement(
					'tbody',
					null,
					issueRows
				)
			);
		}
	}]);

	return IssueTable;
}(React.Component);

var IssueAdd = function (_React$Component4) {
	_inherits(IssueAdd, _React$Component4);

	function IssueAdd() {
		_classCallCheck(this, IssueAdd);

		var _this4 = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

		_this4.handleSubmit = _this4.handleSubmit.bind(_this4);
		return _this4;
	}

	_createClass(IssueAdd, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			var form = document.forms.issueAdd;
			this.props.createIssue({
				owner: form.owner.value,
				title: form.title.value,
				status: 'New',
				created: new Date()
			});
			form.owner.value = "";
			form.title.value = "";
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ name: 'issueAdd', onSubmit: this.handleSubmit },
					React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
					React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
					React.createElement(
						'button',
						null,
						'Add'
					)
				)
			);
		}
	}]);

	return IssueAdd;
}(React.Component);

var IssueList = function (_React$Component5) {
	_inherits(IssueList, _React$Component5);

	function IssueList() {
		_classCallCheck(this, IssueList);

		var _this5 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

		_this5.state = { issues: [] };

		_this5.createTestIssue = _this5.createTestIssue.bind(_this5);
		setTimeout(_this5.createTestIssue.bind(_this5), 2000);
		return _this5;
	}

	_createClass(IssueList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadData();
		}
	}, {
		key: 'loadData',
		value: function loadData() {
			var _this6 = this;

			setTimeout(function () {
				_this6.setState({ issues: issues });
			}, 500);
		}
	}, {
		key: 'createIssue',
		value: function createIssue(newIssue) {
			var newIssues = this.state.issues.slice();
			newIssue.id = this.state.issues.length + 1;
			newIssues.push(newIssue);
			this.setState({ issues: newIssues });
		}
	}, {
		key: 'createTestIssue',
		value: function createTestIssue() {
			this.createIssue({
				status: 'New', owner: 'Peter', created: new Date(),
				title: 'Completion date should be optional'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Issue Tracker'
				),
				React.createElement(IssueFilter, null),
				React.createElement('hr', null),
				React.createElement(IssueTable, { issues: this.state.issues }),
				React.createElement(
					'button',
					{ onClick: this.createTestIssue },
					'Add'
				),
				React.createElement('hr', null),
				React.createElement(IssueAdd, null)
			);
		}
	}]);

	return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), contentNode);