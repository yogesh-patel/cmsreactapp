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

class InstructionsPanel extends React.Component {

    constructor (props){
        super(props);


    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;

        var method_prefix = "this.props.InstructionsInfo.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);
    }

    instructions () {
        alert('Button Instructions clicked');
    }

    render() {
        var Shipment = this.props.instructions.Shipment;
        var Package = this.props.instructions.Package;


        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Instructions' bsStyle='info'>

                            <Grid >
                                <Row >
                                    <Col xs={2} sm={2} >
                                        <label>Shipment</label>
                                    </Col>
                                    <Col xs={1} md={1}>
                                        <Button bSize="xsmall" bsStyle='info' onClick={this.instructions} >Instructions</Button>
                                    </Col>

                                </Row>

                                <Row >
                                    <Col  xs={3} md={3}>
                                        <Input type='textarea' value={Shipment} onChange={this.handleInputChange.bind(this, 'Shipment') } />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col  xs={3} md={3}>
                                        <label>Package</label>
                                    </Col>

                                </Row>
                                <Row >
                                    <Col  xs={3} md={3}>
                                        <Input type='textarea' value={Package} onChange={this.handleInputChange.bind(this, 'Package') } />
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

module.exports = InstructionsPanel;



