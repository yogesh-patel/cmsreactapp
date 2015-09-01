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

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.CreateRequest(partialState[key]);

        this.setState(partialState);
    }


    render() {
        var CreateRequest = this.props.upperSidePanel.CreateRequest;
        var RatePackage = this.props.upperSidePanel.RatePackage;
        var RequestToHold = this.props.upperSidePanel.RequestToHold;
        var VerifyAddress = this.props.upperSidePanel.VerifyAddress;
        var Details = this.props.upperSidePanel.Details;
        var International = this.props.upperSidePanel.International;
        var ClearAll = this.props.upperSidePanel.ClearAll;

        return (

            <div>
                <ButtonGroup vertical >
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'CreateRequest')} > Create Request</Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'RatePackage')} > Rate Package</Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'RequestToHold')} >Request To Hold </Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'VerifyAddress')}>Verify Address</Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'Details')} >Details </Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'International')} >International</Button>
                     <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'ClearAll')} >Clear All</Button>

                </ButtonGroup>

            </div>

        );

    }
}

module.exports = UpperSidePanel;
