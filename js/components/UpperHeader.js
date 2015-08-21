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

     /*   <div id="firstPanel" style="align-content:flex-start">
            <div>
            <table>

            <tr style="background-color:red">
            <td colspan="2"> <button  >-</button><label style="width:200px" id="customer">Customer</label><button  >-</button></td>

            </tr>

            <tr>
            <td> <label>Add Customer</label></td>
        <td colspan="2">
            <input type="radio" value="None" />None<input type="radio" value="To Private List" />To Private List<input type="radio" value="To Global List" />To Global List
        </td>

        </tr>
        <tr>
        <td> <button  >Customer(F8)</button></td>
            <td> <label>Customer Code</label><input id="Text1" type="text" /></td>

        </tr>
        <tr style="background-color:red">
            <td colspan="2"> <button  >-</button><label  id="shiptoInfo">Ship To Information</label><button  >-</button></td>

        </tr>
        <tr>
        <td><label>PO#</label></td>
        <td><input type="text" /></td>
            </tr>

            <tr>
            <td><label>Company</label></td>

        <td><input type="text" /></td>

            </tr>
            <tr>
            <td><label>Contact</label></td>
        <td><input type="text" /></td>
            </tr>
            <tr>
            <td><label>Address Line1</label></td>
        <td><input type="text"  /></td>
            </tr>
            <tr>
            <td><label>Line2</label></td>
        <td><input type="text" /></td>
            </tr>
            <tr>
            <td><label>Line3</label></td>
        <td><input type="text"  /></td>
            </tr>
            <tr>
            <td><label>City-State-Zip</label></td>
        <td><input type="text" style="width:120px" /><input type="text"  /><input type="text" /></td>

            </tr>
            <tr>
            <td><label>Country</label></td>
        <td>
        <select id="Country_list" name="Country_List">
            <option value="0">India</option>
            <option value="1">United States</option>
        </select>
        </td>
        </tr>
        <tr>
        <td><label>Phone</label></td>
        <td><input type="text" style="width:250px" /></td>
            </tr>
            <tr>
            <td><label>Department</label></td>
        <td><input type="text" style="width:250px" /></td>
            </tr>
            <tr>
            <td colspan="2"><button  >Email</button></td>
            </tr>
            </table>
            </div>
            </div>*/

          

        );
    }
}


UpperHeader.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = UpperHeader;