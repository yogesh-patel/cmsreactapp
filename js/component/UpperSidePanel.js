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

    constructor(props) {
        super(props);
    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;

        this.setState(partialState);
    }
    CreateRequest (key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.CreateRequest(partialState[key]);
    }
    RatePackage (key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.RatePackage(partialState[key]);
    }
    RequestToHold (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.RequestToHold(partialState[key]);
    }
    VerifyAddress (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.VerifyAddress(partialState[key]);
    }
    Details (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.Details(partialState[key]);
    }
    International (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.International(partialState[key]);
    }
    ClearAll (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.upperSidePanelObj.ClearAll(partialState[key]);
    }
    render() {
        /*var CreateRequest = this.props.upperSidePanel.CreateRequest;
        var RatePackage = this.props.upperSidePanel.RatePackage;
        var RequestToHold = this.props.upperSidePanel.RequestToHold;
        var VerifyAddress = this.props.upperSidePanel.VerifyAddress;
        var Details = this.props.upperSidePanel.Details;
        var International = this.props.upperSidePanel.International;
        var ClearAll = this.props.upperSidePanel.ClearAll;
*/
        return (

            <div>
                <ButtonGroup vertical >
                     <Button bsSize='small' onClick={this.CreateRequest.bind(this, 'CreateRequest')} > Create Request</Button>
                     <Button bsSize='small' onClick={this.RatePackage.bind(this, 'RatePackage')} > Rate Package</Button>
                     <Button bsSize='small' onClick={this.RequestToHold.bind(this, 'RequestToHold')} >Request To Hold </Button>
                     <Button bsSize='small' onClick={this.VerifyAddress.bind(this, 'VerifyAddress')}>Verify Address</Button>
                     <Button bsSize='small' onClick={this.Details.bind(this, 'Details')} >Details </Button>
                     <Button bsSize='small' onClick={this.International.bind(this, 'International')} >International</Button>
                     <Button bsSize='small' onClick={this.ClearAll.bind(this, 'ClearAll')} >Clear All</Button>

                </ButtonGroup>

            </div>

        );

    }
}

module.exports = UpperSidePanel;
