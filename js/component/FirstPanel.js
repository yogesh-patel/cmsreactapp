/**
 * Created by vedangm on 08/26/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Panel = ReactBoot.Panel;

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
        this.state = {
            open: true
        };

    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = parseFloat(event.target.value);
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
            <div>
                    <div id="FirstUpperPanel" >

                        <table>
                        <tbody>
                            <tr >
                                <td  colSpan="3"> <input type="button" value="-"/><label>Customer </label>
                                    <Button bsSize='xsmall' data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample" >- </Button>  </td>

                            </tr>
                            <div className="collapse" id="collapseExample">
                                <tr>

                                    <td> <label>Add Customer</label></td>
                                    <td colSpan="2" className="tdRad" >

                                        <input type="radio" value="None" name="a" />None<input type="radio" value="To Private List" name="a" />To Private List<input type="radio" name="a" value="To Global List" />To Global List
                                    </td>

                                </tr>

                                <tr>
                                    <td> <Button bsStyle='info' bsSize='xsmall' id="btnCust" onClick={this.cust}>Customer(F8)</Button></td>

                                    <td> <label style={{"marginLeft":"5px"}}>Customer Code</label><input type="text" id="Text1" style={{"width":"80px", "marginLeft":"5px"}}/> </td>

                                </tr>
                            </div>
                            <tr id="shipInfo">
                                <td colSpan="2"><input type="button" value="-"/><label>Ship To Information</label><input type="button" className="collapseButton" value="-"/></td>

                            </tr>
                            <tr>
                                <td><label>PO#</label></td>
                                <td><input type="text" value={PO} onChange={this.handleInputChange.bind(this, 'PO') } /></td>
                            </tr>

                            <tr>
                                <td><label>Company</label></td>

                                <td><input type="text" value={company} onChange={this.handleInputChange.bind(this, 'company') }  /></td>

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

                                <td colSpan="2"><Button bsSize='xsmall' bsStyle='info' id="btnEmail" onClick={this.email} style={{"float":"right"}}>Email </Button> </td>
                            </tr>
                        </tbody>
                        </table>

                    </div>


            </div>
        );
    }

}

module.exports = FirstPanel;