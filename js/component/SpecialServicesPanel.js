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

                            <table>
                                <tr>
                                    <td><label>Special Services</label></td>
                                    <td><Button bsize="xsmall" bsStyle='info' onClick={this.selects} style={{"float":"right"}} >Select(F12) </Button></td>
                                </tr>
                                <tr>
                                    <td><input type="text" style={{"overflow-y":"scroll"}} /></td>
                                </tr>

                            </table>
                        </Panel>
                    </Col>
              </Row>
            </Grid>
        );

    }
}

module.exports = SpecialServicesPanel;
