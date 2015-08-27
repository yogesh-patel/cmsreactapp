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

class SpecialServicesPanel extends React.Component {

    constructor (){
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

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Special Services' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={2} sm={2}><label>Special Services</label> </Col>
                                    <Col xs={1} sm={1}>
                                        <Button bsize="xsmall" bsStyle='info' onClick={this.selects} style={{"float":"right"}} >Select(F12) </Button>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={3} sm={3}>
                                        <Input type='textarea' label='Text Area' />
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

module.exports = SpecialServicesPanel;
