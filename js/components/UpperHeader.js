/**
 * Created by vedangm on 08/21/2015.
 */

'use strict';
/*var React = require('react');

 var mui = require('material-ui');
 var ThemeManager = new mui.Styles.ThemeManager();*/

let React = require('react');
var mui = require('material-ui');

var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var ToolbarTitle = mui.ToolbarTitle;
var DropDownIcon = mui.DropDownIcon;
var ToolbarSeparator = mui.ToolbarSeparator;
var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var FontIcon = mui.FontIcon;
var Paper = mui.Paper;
var ThemeManager = new mui.Styles.ThemeManager();
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var FirstPanel = require('./FirstPanel');
var SecondPanel = require('./SecondPanel');
var ThirdPanel = require('./ThirdPanel');
var LowerSidePanel = require('./LowerSidePanel');
var LowerRightPanel = require('./LowerRightPanel');

let filterOptions = [
    { payload: '1', text: 'Create Request' },
    { payload: '2', text: 'Rate Package' },
    { payload: '3', text: 'Request To Hold' },
    { payload: '4', text: 'Verify Address' },
    { payload: '5', text: 'Details' },
    { payload: '6', text: 'International' },
    { payload: '7', text: 'Clear All' },
];
let iconMenuItems = [
    { payload: '1', text: 'Download' },
    { payload: '2', text: 'More Info' }
];

class UpperHeader extends React.Component {
    constructor() {
        super();
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
    }

    menuSelect(e, selectedIndex, menuItem){
        alert(menuItem.text);
    }

    creatRequest(){
        alert("button create request");
    }
    RatePackage (){
        alert("Rate Package button clicked");
    }
    ReqToHold (){
        alert("Request To Hold button clicked");
    }
    VerifyAddr (){
        alert("Verify Address button clicked");
    }
    Details(){
        alert("Details button clicked");
    }
    International (){
        alert("International button clicked");
    }
    Clear () {
        alert("Clear All button clicked");
    }

    render() {
        return(
            <div>

                <Toolbar>
                    <ToolbarGroup key={0} float="left">
                        <DropDownMenu menuItems={filterOptions} onChange={this.menuSelect} menuItems={filterOptions}/>
                    </ToolbarGroup>
                    <ToolbarGroup key={1} float="right">
                        <ToolbarTitle text="Options" />
                        <FontIcon className="mui-icon-sort" />
                        <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
                        <ToolbarSeparator/>
                        <RaisedButton label="Create Broadcast" primary={true} />
                    </ToolbarGroup>
                </Toolbar>

                <table >
                    <tr style={{"Height":"400px" }}>
                        <td className="td-table"><Paper zDepth={1}>
                            <FirstPanel />
                        </Paper></td>
                        <td className="td-table"><Paper zDepth={1}>
                            <SecondPanel />
                        </Paper></td>
                        <td className="td-table"  > <Paper zDepth={1}>
                            <ThirdPanel />
                        </Paper></td>
                   </tr>
                    <tr>

                        <td  > <LowerSidePanel /> </td>
                        <td colSpan="3" style={{"verticalAlign":"top"}}> <LowerRightPanel /> </td>
                    </tr>

                </table>

             </div>



        );
    }
}


UpperHeader.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = UpperHeader;