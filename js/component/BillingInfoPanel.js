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
var Input = ReactBoot.Input;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;

class BillingInfoPanel extends React.Component {

    constructor (props){
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;

        var method_prefix = "this.props.BillInfo.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);
    }

    cust () {
        alert('button Customer is clicked');
    }

    render() {

        var account = this.props.billingInfo.account;
        var billDuty = this.props.billingInfo.billDuty;

        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                            <Panel collapsible defaultExpanded header='Billing Information' bsStyle='info'>

                                <table>
                                    <tr>
                                        <td><label>Freight Payment</label></td>
                                        <td>
                                            <select id="freightPayment" name="FreightPayment" onChange={this.handleInputChange.bind(this, 'account') } >
                                                <option value="in.">in.</option>
                                                <option value="Cm">Cm</option>
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Billing Duty and Tax To</label></td>
                                        <td>
                                            <select id="BillingDuty" name="BillingDuty" onChange={this.handleInputChange.bind(this, 'billDuty') }>
                                                <option value="Recipient.">Recipient</option>
                                                <option value="Recipient">Recipient</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Account</label></td>
                                        <td><input type="text"  value={account} onChange={this.handleInputChange.bind(this, 'account') }/></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">

                                            <Input type='checkbox' label='Split duty and Tax'/>
                                        </td>

                                    </tr>

                                </table>
                            </Panel>

                    </Col>
                </Row>
            </Grid>
        );

    }
}

module.exports = BillingInfoPanel;

