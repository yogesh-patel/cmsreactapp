var React = require('react');

var MainComponent= require('./component/MainComponent');
//var TabBar= require('./components/TabBar');

//Router.run(routes, Router.HashLocation, function (Root) {
  // whenever the url changes, this callback is called again
  React.render(<MainComponent />, document.body);
//React.render(<TabBar />, document.body);
//});
