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
var DropDownMenu = mui.DropDownMenu;
var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;
var TextField = mui.TextField;
var Paper = mui.Paper;
var RadioButton = mui.RadioButton;
var RadioButtonGroup = mui.RadioButtonGroup;
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let menuItems = [
    { payload: '1', text: 'India' },
    { payload: '2', text: 'United States' },

];

class FirstPanel extends React.Component {
    constructor() {
        super();

        this.state = {
              company: "Wyne Company",
              PO: "",
              contact: "Mr Wayne",
              Addr1: "475 Vally Rd",
              Addr2: "",
              Addr3: "",
              city: "wayne",
              state: "NJ",
              zip: "7470",
              phone: "1212121212"
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
    cust () {
        alert('button Customer is clicked');
    }
    email () {
        alert('Button Email clicked');
    }
    render() {

        var company = this.state.company;
        var PO = this.state.PO;
        var contact = this.state.contact;
        var Addr1 = this.state.Addr1;
        var Addr2 = this.state.Addr2;
        var Addr3 = this.state.Addr3;
        var city = this.state.city;
        var state = this.state.state;
        var zip = this.state.zip;
        var phone = this.state.phone;


        return (
            <Paper >
                <Paper id="FirstUpperPanel" >

                 <table>

                 <tr className="trHeader">
                      <td  colSpan="2"> <input type="button" value="-"/><label>Customer </label>
                          <input type="button" className="collapseButton" value="-" data-toggle="collapse" data-target="#custdiv" aria-expanded="true" aria-controls="custdiv"/>  </td>

                 </tr>
            <div id="custdiv" className ="collapse">
                 <tr>
                     <td> <label>Add Customer</label></td>
                     <td colSpan="2" className="tdRad" >

                         <RadioButtonGroup style={{"display":"inline-flex", "width":"80px", "marginLeft":"0px", "marginRight":"0px"}} name="shipSpeed" defaultSelected="None">
                             <RadioButton
                                 value="None"
                                 label="None"
                                 />
                             <RadioButton
                                 value="To Private List"
                                 label="To Private List"
                                 />
                             <RadioButton
                                 value="To Global List"
                                 label="To Global List"
                                 />
                         </RadioButtonGroup>
                     </td>

                 </tr>

                 <tr>
                     <td> <RaisedButton secondary={true} label="Customer(F8)" id="btnCust" onClick={this.cust} style={{"width":"150px", "fontSize":"small", "paddingLeft":"0px"}}/> </td>
                     <td> <label style={{"marginLeft":"5px"}}>Customer Code</label><TextField id="Text1" style={{"width":"80px", "marginLeft":"5px"}}/> </td>

                 </tr>
             </div>
                <tr id="shipInfo" className="trHeader">
                    <td colSpan="2"><input type="button" value="-"/><label>Ship To Information</label><input type="button" className="collapseButton" value="-"/></td>

                 </tr>
                 <tr>
                     <td><label>PO#</label></td>
                     <td><TextField value={PO} onChange={this.handleInputChange.bind(this, 'PO') } /></td>
                 </tr>

                 <tr>
                     <td><label>Company</label></td>

                     <td><TextField value={company} onChange={this.handleInputChange.bind(this, 'company') }  /></td>

                 </tr>
                 <tr>
                     <td><label>Contact</label></td>
                     <td><TextField value={contact} onChange={this.handleInputChange.bind(this, 'contact') }/></td>
                 </tr>
                 <tr>
                     <td><label>Address Line1</label></td>
                     <td><TextField value={Addr1} onChange={this.handleInputChange.bind(this, 'Addr1') }/></td>
                 </tr>
                 <tr>
                     <td><label>Line2</label></td>
                     <td><TextField value={Addr2} onChange={this.handleInputChange.bind(this, 'Addr2') } /></td>
                 </tr>
                 <tr>
                     <td><label>Line3</label></td>
                     <td><TextField value={Addr3} onChange={this.handleInputChange.bind(this, 'Addr3') } /></td>
                 </tr>
                 <tr>
                     <td><label>City-State-Zip</label></td>
                     <td><TextField id="txtCity" value={city} onChange={this.handleInputChange.bind(this, 'city') } style={{"width" : "90px"}}/>
                         <TextField id="txtState" value={state} onChange={this.handleInputChange.bind(this, 'state') } style={{"width" : "80px"}} />
                         <TextField id="txtZip" value={zip} onChange={this.handleInputChange.bind(this, 'zip') } style={{"width" : "60px"}}/>
                     </td>

                 </tr>
                 <tr>
                     <td><label>Country</label></td>
                     <td>
                         <DropDownMenu menuItems={menuItems} />
                     </td>
                 </tr>
                 <tr>
                     <td><label>Phone</label></td>
                     <td><TextField value={phone} onChange={this.handleInputChange.bind(this, 'phone') } /></td>
                 </tr>
                 <tr>
                     <td><label>Department</label></td>
                     <td> <DropDownMenu menuItems={menuItems} style={{"width" : "100%"}}/></td>
                 </tr>
                 <tr>

                      <td colSpan="2"><RaisedButton secondary={true} id="btnEmail" onClick={this.email} label="Email" style={{"float":"right"}}/> </td>
                 </tr>
                 </table>

                 </Paper>

             </Paper>
        );
    }

}


FirstPanel.childContextTypes = {
    muiTheme: React.PropTypes.object

};
module.exports = FirstPanel;
