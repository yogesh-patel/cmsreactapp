/**
 * Created by vedangm on 08/27/2015.
 */

'use strict';

let React = require('react');
var ReactBoot = require('react-bootstrap');
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;
var Button = ReactBoot.Button;
var ButtonToolbar = ReactBoot.ButtonToolbar;
var ButtonGroup = ReactBoot.ButtonGroup;


class UpperSidePanel extends React.Component {

    constructor() {
        super();
    }


    createRequest () {
        alert('Button Create Request clicked');
    }
    ratePackage () {
        alert('Button Rate Package clicked');
    }
    requestToHold () {
        alert('Button Request To Hold clicked');
    }
    verifyAddress () {
        alert('Button Verify Address clicked');
    }
    Details () {
        alert('Button Release Hold clicked');
    }

    render() {

        return (

            <div>
                <ButtonGroup vertical>
                     <Button bsSize='small' onClick={this.createRequest}  > Create Request</Button>
                    <Button bsSize='small' onClick={this.ratePackage} > Rate Package</Button>
                    <Button bsSize='small' onClick={this.requestToHold} >Request To Hold </Button>
                    <Button bsSize='small' onClick={this.verifyAddress}>Verify Address</Button>
                     <Button bsSize='small' onClick={this.Details} >Details </Button>
                     <Button bsSize='small' onClick={this.releaseHold} >International</Button>
                   <Button bsSize='small' onClick={this.releaseHold} >Clear All</Button>

                </ButtonGroup>


            </div>

        );

    }
}

module.exports = UpperSidePanel;
