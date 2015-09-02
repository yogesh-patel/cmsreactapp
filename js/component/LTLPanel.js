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

class LTLPanel extends React.Component {

    constructor (){
        super();

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.ltl.freightClass(partialState[key]);
        this.setState(partialState);
    }
    selects () {
        alert('Button Select clicked');
    }

    render() {
        var freightClass = this.props.ltlInfo.freightClass;

        return (
            <Grid>
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='LTL' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={2} sm={2}>
                                        <label>Freight Class</label>
                                    </Col>
                                    <Col xs={2} sm={2}>
                                        <select id="freightClass" name="FreightClass" onChange={this.handleInputChange.bind(this, 'freightClass')} >
                                            <option value="in.">in.</option>
                                            <option value="Cm">Cm</option>
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

module.exports = LTLPanel;