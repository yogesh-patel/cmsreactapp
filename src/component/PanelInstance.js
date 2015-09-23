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
var FormInput = require('../core/FormInput');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;
var Input = ReactBoot.Input;

class PanelInstance extends React.Component {

    constructor (props){
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event;
     //   partialState[key] = event.target.value;

        var method_prefix = "this.props.PanelInfo.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);
    }

    cust () {
        alert('button Customer is clicked');
    }

    render() {

       var CustomerCode = this.props.PanelInstanceInfo.CustomerCode;

        return (
            <Grid >
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Customer' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col sm={1}><label>Add Customer</label> </Col>
                                    <Col sm={2}>
                                         <input type="radio" value="None" name="a" >None</input> <input type="radio" value="To Private List" name="a" />To Private List <input type="radio" name="a" value="To Global List" />To Global List

                                    </Col>

                                </Row>&nbsp;

                                <Row>
                                    <Col xs={1} sm={1}><Button bsStyle='info' bsSize='small' id="btnCust" onClick={this.cust}>Customer(F8)</Button> </Col>

                                    <Col xs={1} sm={1}>
                                        <label style={{"marginLeft":"5px"}}>Customer Code</label>
                                    </Col>
                                    <Col xs={1} sm={1}>
                                        <FormInput isRequired={true} style={{"width":"80px", "marginLeft":"5px"}} value={CustomerCode} onChange={this.handleInputChange.bind(this, 'CustomerCode') }/>

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

module.exports = PanelInstance;
