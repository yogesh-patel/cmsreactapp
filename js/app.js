var React = require('react');

var MainComponent= require('./component/MainComponent');

//Router.run(routes, Router.HashLocation, function (Root) {
// whenever the url changes, this callback is called again
React.render(<MainComponent />, document.body);

//});
