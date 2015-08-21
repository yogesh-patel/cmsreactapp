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

class UpperHeader extends React.Component {
    constructor() {
        super();
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()

        };
    }
    render() {
        return(
<div>
            <div id="header" class="row">
            <table>
            <tr>

                  <td>  <button  >Create Request</button> </td>
                   <td> <button  >Rate Package</button></td>
                  <td> <button  >Request To Hold</button></td>
                   <td><button  >Verify Address</button></td>
                <td> <button  >Details</button></td>
                <td> <button  >International</button></td>
                <td><button  >Clear All</button></td>
            </tr>
            </table>
            </div>
            <FirstPanel />
        </div>



        );
    }
}


UpperHeader.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = UpperHeader;