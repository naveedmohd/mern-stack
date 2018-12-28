'use strict';

var contentNode = document.getElementById('contents');
var component = React.createElement(
  'h1',
  null,
  'Hello World Today2!'
); // A simple component, written in JSX
ReactDOM.render(component, contentNode); // Render the component inside the content Node