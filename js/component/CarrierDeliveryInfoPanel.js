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

    constructor (){
        super();

        this.state = {
            shipVia: "",
            delivery : ""
        };
    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }

    render() {
        var delivery = this.state.delivery;
        var shipVia = this.state.shipVia;

        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Carrier Delivery Information' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={2} sm={2}> <label>Ship Via</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <select id="ShipVia" name="ShipVia" onchange ={this.shipVia}>
                                            <option value="in.">in.</option>
                                            <option value="in">Cm</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={2} sm={2}> <label>Del. By</label></Col>
                                    <Col xs={2} sm={2}>
                                        <select id="DeliveredBy" name="DeliveredBy" onselect={this.delivery} >
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

