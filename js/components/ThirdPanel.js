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
var RaisedButton = mui.RaisedButton;
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

        this.state = {PackageCount: "Wyne Company",
            Package: "",
            Weight: "",


        };

    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }

    carton () {
        alert('Button Carton clicked');
    }
    instructions () {
    alert('Button Instructions clicked');
}
    render() {

        var PackageCount = this.state.PackageCount;
        var Package = this.state.Package;
        var Weight = this.state.Weight;

        return (

            <div >
                <div id="ThirdUpperPanel">
                    <table>
                        <tr className="trHeader">
                            <td colSpan="2"> <input type="button" id="min" value="*" /><label id="packageParam">Package Parameters</label><input type="button" value="-" className="collapseButton" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><label style={{"font-weight":"bold"}}>Box Information</label></td>
                            </tr>
                            <tr style={{"background-color":"silver"}}>
                                <td>Package Count</td>
                                <td>Package#</td>
                            </tr>
                            <tr>
                                <td><TextField value={PackageCount} onChange={this.handleInputChange.bind(this, 'PackageCount') }/></td>
                                <td><TextField  value={Package} onChange={this.handleInputChange.bind(this, 'Package') }/> <br /></td>

                            </tr>
                            <tr style={{"background-color":"silver"}}>
                                <td colSpan="2"  style={{"font-weight":"bold"}}>Weight</td>
                            </tr>
                            <tr>
                                <td><label>Weight</label></td>
                                <td><label>Units</label></td>
                            </tr>
                            <tr>
                                <td><TextField value={Weight} onChange={this.handleInputChange.bind(this, 'Weight') }/></td>
                                <td>
                                    <DropDownMenu menuItems={menuItems} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><label style={{"font-weight":"bold"}}>Dimentions</label></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><RaisedButton onClick={this.carton} secondary={true} label="Carton" style={{"float":"right"}}/></td>
                            </tr>
                            <tr>
                                <td style={{"background-color":"silver"}}>
                                    <div>
                                        <label style={{"width":"70px"}}>Length  </label><label style={{"width":"70px","margin-left":"20px"}}>   Width</label>
                                    </div>
                                </td>

                                <td style={{"background-color":"silver"}}>
                                    <div>
                                        <label style={{"width":"100px"}}>Height  </label><label style={{"width":"70px", "float":"center" ,"margin-left":"20px"}}>   Units</label>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td><div><TextField style={{"width":"70px"}} /><TextField style={{"width":"70px","margin-left":"10px"}} /></div></td>

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
                                    <td><RaisedButton label="Instructions" secondary={true} onClick={this.instructions} style={{"float":"right"}} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><TextField style={{"overflow-y":"scroll"}} /></td>
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
