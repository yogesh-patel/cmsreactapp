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

class PanelInstance extends React.Component {

    constructor (){
        super();
    }

    cust () {
        alert('button Customer is clicked');
    }

    render() {
        return (
            <div >
                <Panel collapsible defaultExpanded header='Customer' bsStyle='info'>

                   <table>
                        <tr>
                            <td> <label>Add Customer</label></td>
                            <td colSpan="2" className="tdRad" >

                                <input type="radio" value="None" name="a" />None<input type="radio" value="To Private List" name="a" />To Private List<input type="radio" name="a" value="To Global List" />To Global List
                            </td>

                        </tr>

                        <tr>
                            <td> <Button bsStyle='info' bsSize='small' id="btnCust" onClick={this.cust}>Customer(F8)</Button></td>

                            <td> <label style={{"marginLeft":"5px"}}>Customer Code</label><input type="text" id="Text1" style={{"width":"80px", "marginLeft":"5px"}}/> </td>

                        </tr>

                    </table>
                </Panel>

            </div>
        );

    }
}

module.exports = PanelInstance;
