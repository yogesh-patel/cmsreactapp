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

class PanelInstance extends React.Component {

    constructor (props){
        super(props);

    }


    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;


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


                           <table>
                                <tr>
                                    <td> <label>Add Customer</label></td>
                                    <td colSpan="2" >

                                        <input type="radio" value="None" name="a" />None<input type="radio" value="To Private List" name="a" />To Private List<input type="radio" name="a" value="To Global List" />To Global List
                                    </td>
                                </tr>

                                <tr>
                                    <td> <Button bsStyle='info' bsSize='small' id="btnCust" onClick={this.cust}>Customer(F8)</Button></td>

                                    <td> <label style={{"marginLeft":"5px"}}>Customer Code</label></td>
                                     <td>
                                         <input type="text" id="Text1" style={{"width":"80px", "marginLeft":"5px"}} bsSize="small" value={CustomerCode} onChange={this.handleInputChange.bind(this, 'CustomerCode') }/>
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

module.exports = PanelInstance;
