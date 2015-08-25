/**
 * Created by synerzip on 20/08/15.
 */
'use strict';
var React = require('react');

var ReactMaerial = require('material-ui');
var ThemeManager = new ReactMaerial.Styles.ThemeManager();
var UpperHeader = require('./UpperHeader');
var DropDownMenu = ReactMaerial.DropDownMenu;
var iconElementRight = ThemeManager.iconElementRight;

let filterOptions = [
    { payload: '1', text: 'Home' },
    { payload: '2', text: 'Ship' },
    { payload: '3', text: 'View' },
    { payload: '4', text: 'Manage' },
    { payload: '5', text: 'Help' },
    { payload: '6', text: 'Logout' }
];

class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    menuSelect(e, selectedIndex, menuItem){
        alert(menuItem.text);
    }

    render(){
        return (
            <div className="row">
                 <div className="col-lg-6">
                    <ReactMaerial.AppBar
                        title="CMS"

                        showMenuIconButton={true}
                        iconElementRight={<DropDownMenu menuItems={filterOptions} onChange={this.menuSelect} menuItems={filterOptions}/>} />

                 </div>
        <UpperHeader />

            </div>
        );
    }
}

MainComponent.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = MainComponent;
