/**
 * Created by vedangm on 08/26/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;
class SecondPanel extends React.Component{

    constructor() {
        super();


    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }
    selects () {
        alert('Button Select clicked');
    }

    render(){

        return(
                <div>
                    <div  id="SecondUpperPanel">
                        <table>
                        <tbody>
                            <tr className="trHeader">
                                <td colSpan="3"> <Button bsSize='small' > * </Button>
                                    <label>Carrier Delivery Information</label>
                                    <Button bsSize='small' style={{"float":"right" }}> - </Button></td>

                            </tr>

                            <tr>
                                <td><label>Ship Via</label></td>
                                <td>
                                    <select id="ShipVia" name="ShipVia" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><label>Del. By</label></td>
                                <td>
                                    <select id="DeliveredBy" name="DeliveredBy" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>

                            <tr className="trHeader">
                                <td colSpan="3"> <Button bsSize='small' > * </Button>
                                    <label id="customer">Billing Information</label>
                                    <Button bsSize='small' style={{"float":"right" }}> - </Button></td>
                            </tr>
                            <tr>
                                <td><label>Freight Payment</label></td>
                                <td>
                                    <select id="freightPayment" name="FreightPayment" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td><label>Billing Duty and Tax To</label></td>
                                <td>
                                    <select id="BillingDuty" name="BillingDuty" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Account</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td colSpan="3">

                                    <Input type='checkbox' label='Split duty and Tax'/>
                                </td>

                            </tr>

                            <tr className="trHeader">
                                <td colSpan="3"><Button bsSize='small' > * </Button>
                                    <label id="specialServices">Special Services</label>
                                    <Button bsSize='small' style={{"float":"right" }}> - </Button></td>

                            </tr>
                            <tr>
                                <td><label>Special Services</label></td>
                                <td><Button bsize="xsmall" bsStyle='info' onClick={this.selects} style={{"float":"right"}} >Select(F12) </Button></td>
                            </tr>
                            <tr>
                                <td><input type="text" style={{"overflow-y":"scroll"}} /></td>
                            </tr>
                            <tr  className="trHeader">
                                <td colSpan="3"> <Button bsSize='small' > - </Button>
                                    <label id="LTL">LTL</label>
                                    <Button bsSize='small' style={{"float":"right" }}> - </Button></td>
                            </tr>
                            <tr>
                                <td><label>Freight Class</label></td>
                                <td>
                                    <select id="freightClass" name="FreightClass" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
        );
    }

}

module.exports = SecondPanel;
