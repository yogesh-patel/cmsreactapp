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

class ShoppingRequestHistoryPanel extends React.Component {

    constructor (){
        super();

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px'
        };
    }


    render() {
        return (
            <div >
                <Panel collapsible defaultExpanded header='Shopping Request History' bsStyle='info'>

                    <table>
                        <tr style={{"background-color":"silver"}}>
                            <th style={{"width":"100px"}}><label>Select</label></th>
                            <th style={{"width":"130px"}}><label>Request Number</label></th>
                            <th style={{"width":"100px"}}><label>Contact</label></th>
                            <th style={{"width":"100px"}}><label>Company</label></th>
                            <th style={{"width":"100px"}}><label>Status</label></th>
                            <th style={{"width":"100px"}}><label>Ship Via</label></th>
                            <th style={{"width":"100px"}}><label>Weight</label></th>
                            <th style={{"width":"100px"}}><label>Cost</label></th>
                            <th style={{"width":"80px"}}><label>Box</label></th>
                        </tr>


                    </table>
                </Panel>

            </div>
        );

    }
}

module.exports = ShoppingRequestHistoryPanel;
