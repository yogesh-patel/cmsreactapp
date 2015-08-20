var React = require('react');
var mui = require('material-ui');
var MainComponent= require('./components/MainComponent');

//Router.run(routes, Router.HashLocation, function (Root) {
  // whenever the url changes, this callback is called again
  React.render(<MainComponent />, document.body);
//});

