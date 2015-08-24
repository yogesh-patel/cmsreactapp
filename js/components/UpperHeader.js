/**
 * Created by vedangm on 08/21/2015.
 */


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
var FirstPanel = require('./FirstPanel');
var SecondPanel = require('./SecondPanel');
var ThirdPanel = require('./ThirdPanel');

class UpperHeader extends React.Component {
    constructor() {
        super();
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
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
            <div id="header" class="row">
            <table>
            <tr>

                   <td>  <button onClick={this.creatRequest} >Create Request</button> </td>
                   <td> <button onClick={this.RatePackage} >Rate Package</button></td>
                   <td> <button onClick={this.ReqToHold} >Request To Hold</button></td>
                   <td><button onClick={this.VerifyAddr} >Verify Address</button></td>
                   <td> <button  onClick={this.Details}>Details</button></td>
                   <td> <button onClick={this.International} >International</button></td>
                   <td><button  onClick={this.Clear}>Clear All</button></td>
            </tr>
            </table>
            </div>
            <table>
                <tr>
                   <td> <FirstPanel /> </td>
                    <td><SecondPanel /> </td>
                    <td><ThirdPanel /> </td>
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