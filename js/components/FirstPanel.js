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


class FirstPanel extends React.Component {
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
                <div id="firstPanel" >

                 <table>

                 <tr >
                      <td colspan="2"><div class="row"> <input type="button" value="-"/><input type="label" value="Customer" /> <input type="button" value="-" Style="float:right"/> </div> </td>

                 </tr>

                 <tr>
                     <td> <p>Add Customer</p></td>
                     <td colspan="2">
                     <input type="radio" value="None" />None<input type="radio" value="To Private List" />To Private List<input type="radio" value="To Global List" />To Global List
                     </td>

                 </tr>
                 <tr>
                     <td> <button  >Customer(F8)</button></td>
                     <td> <p >Customer Code</p><input id="Text1" type="text" /> </td>

                 </tr>
                <tr >
                    <td colspan="2"><input type="button" value="-"/><p >Ship To Information</p><input type="button" value="-" Style="float:right"/></td>

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
                     <td><input type="text" /><input type="text"  /><input type="text" /></td>

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
                     <td><input type="text" /></td>
                 </tr>
                 <tr>
                     <td><label>Department</label></td>
                     <td><input type="text" /></td>
                 </tr>
                 <tr>
                      <td colspan="2" ><input type="button" value="Email" Style="float:right" Class="btnHeader" /> </td>
                 </tr>
                 </table>

                 </div>

             </div>
        );
    }

}


FirstPanel.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = FirstPanel;
