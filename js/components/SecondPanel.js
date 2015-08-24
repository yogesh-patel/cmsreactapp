/**
 * Created by vedangm on 08/24/2015.
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
var DropDownMenu = mui.DropDownMenu;
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let menuItems = [
    { payload: '1', text: 'Never' },
    { payload: '2', text: 'Every Night' },
    { payload: '3', text: 'Weeknights' },
    { payload: '4', text: 'Weekends' },
    { payload: '5', text: 'Weekly' },
];

class SecondPanel extends React.Component {
    constructor() {
        super();
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
    }

    render() {
        return (

            <div>
                <div id="SecondUpperPanel">
                    <table>

                        <tr className="trHeader">
                            <td colSpan="3"> <input type="button" id="min" value="*" /><label>Carrier Delivery Information</label> <input type="button" value="-" className="collapseButton" /></td>

                        </tr>

                        <tr>
                            <td><label>Ship Via</label></td>
                            <td>
                                <DropDownMenu menuItems={menuItems} />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label>Del. By</label></td>
                            <td>
                                <DropDownMenu menuItems={menuItems} />
                            </td>
                            <td></td>
                        </tr>

                        <tr className="trHeader">
                            <td colSpan="3"> <input type="button" id="min" value="*" /><label id="customer">Billing Information</label><input type="button" value="-" className="collapseButton" /></td>
                        </tr>
                        <tr>
                            <td><label>Freight Payment</label></td>
                            <td>
                                <DropDownMenu menuItems={menuItems} />

                            </td>
                        </tr>
                        <tr>
                            <td><label>Billing Duty and Tax To</label></td>
                            <td>
                                <DropDownMenu menuItems={menuItems} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Account</label></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" value="Split duty and Tax" /><label>Split duty and Tax</label></td>

                        </tr>

                        <tr className="trHeader">
                            <td colSpan="3"> <input type="button" id="min" value="*" /><label id="specialServices">Special Services</label><input type="button" value="-" className="collapseButton" /></td>

                        </tr>
                        <tr>
                            <td><label>Special Services</label></td>
                            <td><input type="button" value="Select(F12)" Style="float:right" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" Style="overflow:scroll" /></td>
                        </tr>
                        <tr  className="trHeader">
                            <td colSpan="3"> <input type="button" id="min" value="*" /><label id="LTL">LTL</label><input type="button" value="-" className="collapseButton" /></td>
                        </tr>
                        <tr>
                            <td><label>Freight Class</label></td>
                            <td>
                                <DropDownMenu menuItems={menuItems} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
    );
    }

}


SecondPanel.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = SecondPanel;

