/**
 * Created by vedangm on 08/27/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var UpperHeader = require('./UpperHeader');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;

class PanelInstance extends React.Component {

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
            <div >
                <Panel collapsible defaultExpanded header='Ship To Information' bsStyle='info'>

                    <table>
                        <tr>
                            <td><label>PO#</label></td>
                            <td><input type="text" value={PO} onChange={this.handleInputChange.bind(this, 'PO') } /></td>
                        </tr>

                        <tr>
                            <td><label>Company</label></td>

                            <td ><input type="text" value={company} onChange={this.handleInputChange.bind(this, 'company') }  /></td>

                        </tr>
                        <tr>
                            <td><label>Contact</label></td>
                            <td><input type="text" value={contact} onChange={this.handleInputChange.bind(this, 'contact') }/></td>
                        </tr>
                        <tr>
                            <td><label>Address Line1</label></td>
                            <td><input type="text" value={Addr1} onChange={this.handleInputChange.bind(this, 'Addr1') }/></td>
                        </tr>
                        <tr>
                            <td><label>Line2</label></td>
                            <td><input type="text" value={Addr2} onChange={this.handleInputChange.bind(this, 'Addr2') } /></td>
                        </tr>
                        <tr>
                            <td><label>Line3</label></td>
                            <td><input type="text" value={Addr3} onChange={this.handleInputChange.bind(this, 'Addr3') } /></td>
                        </tr>
                        <tr>
                            <td><label>City-State-Zip</label></td>
                            <td><input type="text" id="txtCity" value={city} onChange={this.handleInputChange.bind(this, 'city') } style={{"width" : "90px"}}/>
                                <input type="text" id="txtState" value={state} onChange={this.handleInputChange.bind(this, 'state') } style={{"width" : "80px"}} />
                                <input type="text" id="txtZip" value={zip} onChange={this.handleInputChange.bind(this, 'zip') } style={{"width" : "60px"}}/>
                            </td>

                        </tr>
                        <tr>
                            <td><label>Country</label></td>
                            <td>
                                <select id="units1" name="department" >
                                    <option value="in.">in.</option>
                                    <option value="in">Cm</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Phone</label></td>
                            <td><input type="text" value={phone} onChange={this.handleInputChange.bind(this, 'phone') } /></td>
                        </tr>
                        <tr>
                            <td><label>Department</label></td>
                            <td>  <select id="units1" name="department" >
                                <option value="in.">in.</option>
                                <option value="in">Cm</option>
                            </select>
                            </td>
                        </tr>
                        <tr>

                            <td colSpan="2"><Button bsSize='small' bsStyle='info' id="btnEmail" onClick={this.email} style={{"float":"right"}}>Email </Button> </td>
                        </tr>

                    </table>
                </Panel>

            </div>
        );

    }
}

module.exports = PanelInstance;
