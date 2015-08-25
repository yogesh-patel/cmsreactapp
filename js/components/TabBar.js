/**
 * Created by vedangm on 08/21/2015.
 */
'use strict';
/*var React = require('react');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();*/

let React = require('react');
var mui = require('material-ui');

var Tabs = mui.Tabs;
var Tab = mui.Tab;
var ThemeManager = new mui.Styles.ThemeManager();
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var UpperHeader= require('./UpperHeader');
//let {IconButton, Slider, Styles, Tab, Tabs } = require('material-ui');
//let ComponentDoc = require('../../component-doc');
//let { Colors, Typography } = Styles;

class TabBar extends React.Component {

    constructor() {
        super();
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme(),
            Tabs: mui.Tabs
        };
    }

    render() {
        let desc = 'Tabs can now operate in two different modes: controlled and uncontrolled. ' +
            'The uncontrolled mode takes over automatically if no value prop is passed to your' +
            'Tabs and Tab components. If you want controllable tabs, passing a value to both the' +
            ' Tabs and Tab elements will let you programmatically adjust which one is selected. ' +
            'ValueLink is now supported by Tabs.';


        return (

        < Tabs >
        < Tab label = "Home" >
         < div >
            < h2 > This is Home Page< / h2 >
            < p > This is Home Page < / p >
        < / div >
        < / Tab >
        < Tab
        label = "Ship"  >
         < div >
                <UpperHeader />

         < / div >
        < / Tab >
        < Tab
        label = "View" >
          < div >
            < h2 > This is View Page< / h2 >
            < p > This is Home Page < / p >
           < / div >
        < / Tab >
        < Tab
        label = "Manage" onClick={this.handleTouchTap}>
         < div >
            < h2 >This is Manage Page < / h2 >
        < / div >
        < / Tab >
        < Tab
        label = "Help" >
            < div >
            < h2 >This is Help Page < / h2 >

        < / div >
        < / Tab >
        < Tab
        label = "Logout" >
            < div >
            < h2 >This is Logout Page < / h2 >

        < / div >
        < / Tab >
        < / Tabs >

    );
    }

}

/*
_handleButtonClick(Tab) {
    this.setState({tabsValue: 'c'});
}

_handleTabActive(tab){
    this.context.router.transitionTo(tab.props.route);
}

_handleTabsChange(value, e, tab){
    this.setState({tabsValue: value});
}
}

TabBar.contextTypes = {
    router: React.PropTypes.func
};*/
TabBar.childContextTypes = {
    muiTheme: React.PropTypes.object,
    Tabs: mui.Tabs
};
module.exports = TabBar;
