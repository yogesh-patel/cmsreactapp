/**
 * Created by vedangm on 08/25/2015.
 */


'use strict';

let React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Panel = ReactBoot.Panel;
var ButtonGroup = ReactBoot.ButtonGroup;

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();



class LowerSidePanel extends React.Component {
    constructor() {
        super();
    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.RePrint(partialState[key]);

        this.setState(partialState);
    }

    rePrint () {
        alert('Button reprint clicked');
    }
    view () {
        alert('Button View clicked');
    }
    stop () {
        alert('Button Stop clicked');
    }
    hold () {
        alert('Button Hold clicked');
    }
    releaseHold () {
        alert('Button Release Hold clicked');
    }
    render() {
        var RePrint = this.props.lowerSidePanel.RePrint;
        var View = this.props.lowerSidePanel.View;
        var Stop = this.props.lowerSidePanel.Stop;
        var Hold = this.props.lowerSidePanel.Hold;
        var ReleaseHold = this.props.lowerSidePanel.ReleaseHold;

        return(
           <ButtonGroup vertical>
                <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'RePrint')}  > RePrint</Button>
                <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'View')} > View</Button>
                <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'Stop')} >Stop </Button>
                <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'Hold')} >Hold</Button>
                <Button bsSize='small' onClick={this.handleInputChange.bind(this, 'ReleaseHold')} >Release Hold </Button>

            </ButtonGroup>


        );
    }
}

module.exports = LowerSidePanel;
