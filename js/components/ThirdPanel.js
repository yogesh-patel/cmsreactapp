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
                            <tr>
                                <td>Package Count</td>
                                <td>Package#</td>
                            </tr>
                            <tr>
                                <td><input type="text" /></td>
                                <td><input type="text" /> <br /></td>

                            </tr>
                            <tr>
                                <td colSpan="2">Weight</td>
                            </tr>
                            <tr>
                                <td><label>Weight</label></td>
                                <td><label>Units</label></td>
                            </tr>
                            <tr>
                                <td><input type="text" /></td>
                                <td>
                                    <DropDownMenu menuItems={menuItems} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><label>Dimentions</label></td>
                            </tr>
                            <tr>
                                <td><input type="button" value="Carton" /></td>
                            </tr>
                            <tr>
                                <td Style="background-color:silver">
                                    <div>
                                        <label Style="width:100px">Length  </label><label Style="width:70px; margin-left:5px">   Width</label>
                                    </div>
                                </td>


                                <td Style="background-color:silver">
                                    <div>
                                        <label Style="width:100px">Height  </label><label Style="width:70px; align-self:center">   Units</label>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td><div><input Style="width:70px" type="text" /><input Style="width:70px" type="text" /></div></td>

                                <td class="td-width">
                                    <div>
                                        <input type="text" Style="width:70px" />
                                        <DropDownMenu menuItems={menuItems} />
                                    </div>
                                </td>

                            </tr>
                            <tr className="trHeader">
                                <td colSpan="2"> <input type="button" id="min" value="*" /><label id="instructions">Instructions</label><input type="button" value="-" className="collapseButton" /></td>
                                </tr>
                                <tr>
                                    <td><label>Shipment</label></td>
                                    <td><input type="button" value="Instructions" Style="float:right" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><input type="text" Style="width:300px" /></td>
                                </tr>
                                <tr><td colSpan="2"><label>Package</label></td></tr>
                                <tr>
                                    <td colSpan="2"><input type="text" Style="overflow:scroll; overflow-y:visible; width:300px" /></td>
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
