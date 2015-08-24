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
var FlatButton = mui.FlatButton;
var TextField = mui.TextField;

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let menuItems = [
    { payload: '1', text: 'Never' },
    { payload: '2', text: 'Every Night' },
    { payload: '3', text: 'Weeknights' },
    { payload: '4', text: 'Weekends' },
    { payload: '5', text: 'Weekly' },
];

class ThirdPanel extends React.Component {
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
                <div id="ThirdUpperPanel">
                    <table>
                        <tr className="trHeader">
                            <td colSpan="2"> <input type="button" id="min" value="*" /><label id="packageParam">Package Parameters</label><input type="button" value="-" className="collapseButton" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><label>Box Information</label></td>
                            </tr>
                            <tr style={{"background-color":"silver"}}>
                                <td>Package Count</td>
                                <td>Package#</td>
                            </tr>
                            <tr>
                                <td><TextField /></td>
                                <td><TextField  /> <br /></td>

                            </tr>
                            <tr style={{"background-color":"silver"}}>
                                <td colSpan="2" >Weight</td>
                            </tr>
                            <tr>
                                <td><label>Weight</label></td>
                                <td><label>Units</label></td>
                            </tr>
                            <tr>
                                <td><TextField /></td>
                                <td>
                                    <DropDownMenu menuItems={menuItems} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><label>Dimentions</label></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><FlatButton label="Carton" className="RightAllignedButtons"/></td>
                            </tr>
                            <tr>
                                <td style={{"background-color":"silver"}}>
                                    <div>
                                        <label>Length  </label><label style={{"width":"70px","margin-left":"5px"}}>   Width</label>
                                    </div>
                                </td>

                                <td style={{"background-color":"silver"}}>
                                    <div>
                                        <label style={{"width":"100px"}}>Height  </label><label style={{"width":"70px", "align-self":"center"}}>   Units</label>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td><div><TextField style={{"width":"70px"}} /><TextField style={{"width":"70px"}} /></div></td>

                                <td class="td-width">
                                    <div>
                                        <TextField  style={{"width":"70px"}} />
                                        <DropDownMenu menuItems={menuItems} />
                                    </div>
                                </td>

                            </tr>
                            <tr className="trHeader">
                                <td colSpan="2"> <input type="button" id="min" value="*" /><label id="instructions">Instructions</label><input type="button" value="-" className="collapseButton" /></td>
                                </tr>
                                <tr>
                                    <td><label>Shipment</label></td>
                                    <td><FlatButton label="Instructions" className="RightAllignedButtons" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><TextField style={{"width":"300px","overflow-y":"scroll"}} /></td>
                                </tr>
                                <tr><td colSpan="2"><label>Package</label></td></tr>
                                <tr>
                                    <td colSpan="2"><TextField style={{"overflow-y":"scroll"}} /></td>
                                </tr>
                            </table>
                        </div>
            </div>
        );
    }

}

ThirdPanel.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = ThirdPanel;
