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
var Input = ReactBoot.Input;

//var CarrierDeliveryInfoPanel = React.createClass({
class CarrierDeliveryInfoPanel extends React.Component {

    constructor(props){
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
        var delivery = this.props.carrierDeliveryInfo.delivery;
        var shipViaList;

        if( this.props.carrierDeliveryInfo.shipVia ) {
            shipViaList = this.props.carrierDeliveryInfo.shipVia.map(ship => {
                return <option value={ship}>{ship}</option>;
            });
        }

        return (

            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Carrier Delivery Information' bsStyle='info'>

                            <Grid>
                                <Row>

                                    <Col  sm={1}> <label>Ship Via</label> </Col>
                                    <Col  sm={2}>
                                        <Input type="select" id="ShipVia" name="ShipVia" onChange={this.handleInputChange.bind(this, 'shipVia')} onselect = {this.handleInputChange.bind(this, 'shipVia')}>
                                            {shipViaList}
                                        </Input>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col  sm={1}> <label>Del. By</label></Col>
                                    <Col  sm={2}>
                                        <Input type="select" id="DeliveredBy" name="DeliveredBy" onChange={this.handleInputChange.bind(this, 'delivery')} onselect={this.props.carrierDeliveryInfo.delivery} >
                                            <option value="in.">09/23/2015</option>
                                            <option value="Cm">09/24/2015</option>
                                            <option value="Cm">09/25/2015</option>
                                            <option value="Cm">09/26/2015</option>
                                        </Input>
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

