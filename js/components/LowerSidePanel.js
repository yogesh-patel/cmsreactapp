/**
 * Created by vedangm on 08/25/2015.
 */


'use strict';
/*var React = require('react');

 var mui = require('material-ui');
 var ThemeManager = new mui.Styles.ThemeManager();*/

let React = require('react');
var mui = require('material-ui');

var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;
var Paper = mui.Paper;
var ThemeManager = new mui.Styles.ThemeManager();
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();



class LowerSidePanel extends React.Component {
    constructor() {
        super();
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
    }

    rePrint () {
        alert('Button reprint clicked');
    }
    view () {
        alert('Button View clicked');
    }
    stop () {
        alert('Button Stop clicked');
    }
    hold () {
        alert('Button Hold clicked');
    }
    releaseHold () {
        alert('Button Release Hold clicked');
    }
    render() {
        return(
            <Paper >
                <p> <RaisedButton secondary={true} label="RePrint"  onClick={this.rePrint} style={{"width":"120px"}} /></p>
                <p><RaisedButton secondary={true} label="View" onClick={this.view} style={{"width":"120px"}}/></p>
                <p><RaisedButton secondary={true} label="Stop" onClick={this.stop} style={{"width":"120px"}}/> </p>
                <p><RaisedButton secondary={true} label="Hold" onClick={this.hold} style={{"width":"120px"}}/> </p>
                <p> <RaisedButton secondary={true} label="Release Hold" onClick={this.releaseHold} style={{"width":"120px"}}/> </p>

            </Paper>


        );
    }
}


LowerSidePanel.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = LowerSidePanel;
