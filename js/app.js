var React = require('react');
var mui = require('material-ui');
//var MainComponent= require('./components/MainComponent');
var TabBar= require('./components/TabBar');

//Router.run(routes, Router.HashLocation, function (Root) {
  // whenever the url changes, this callback is called again
//  React.render(<MainComponent />, document.body);
React.render(<TabBar />, document.body);
//});
