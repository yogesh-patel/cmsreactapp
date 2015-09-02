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
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;

class CarrierDeliveryInfoPanel extends React.Component {

    constructor (props){
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;

        var method_prefix = "this.props.carrierDeliveryInfo.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);
    }

    render() {
    //    var delivery = this.props.carrierDeliveryInfo.delivery;
     //   var shipVia = this.props.carrierDeliveryInfo.shipVia;

        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Carrier Delivery Information' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={2} sm={2}> <label>Ship Via</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <select id="ShipVia" name="ShipVia" onChange={this.handleInputChange.bind(this, 'shipVia')} onselect = {this.handleInputChange.bind(this, 'shipVia')}>
                                            <option value="in.">in.</option>
                                            <option value="in">Cm</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={2} sm={2}> <label>Del. By</label></Col>
                                    <Col xs={2} sm={2}>
                                        <select id="DeliveredBy" name="DeliveredBy" onChange={this.handleInputChange.bind(this, 'delivery')} onselect={this.props.carrierDeliveryInfo.delivery} >
                                            <option value="in.">in.</option>
                                            <option value="in">Cm</option>
                                        </select>
                                    </Col>

                                 </Row>
                            </Grid>
                        </Panel>

                    </Col>
                </Row>
            </Grid>
        );

    }
}

module.exports = CarrierDeliveryInfoPanel;

