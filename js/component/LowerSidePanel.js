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
       // this.props.lowerSidePanelObj.RePrint(partialState[key]);

        this.setState(partialState);
    }

    rePrint (key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.RePrint(partialState[key]);
    }
    view (key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.View(partialState[key]);
    }
    stop (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.Stop(partialState[key]);
    }
    hold (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.Hold(partialState[key]);
    }
    releaseHold (key, event) {

        var partialState = {};
        partialState[key] = event.target.value;
        this.props.lowerSidePanelObj.ReleaseHold(partialState[key]);
    }
    render() {
        var RePrint = this.props.lowerSidePanel.RePrint;
        var View = this.props.lowerSidePanel.View;
        var Stop = this.props.lowerSidePanel.Stop;
        var Hold = this.props.lowerSidePanel.Hold;
        var ReleaseHold = this.props.lowerSidePanel.ReleaseHold;

        return(
           <ButtonGroup vertical>
                <Button bsSize='small' onClick={this.rePrint.bind(this, 'RePrint')}  > RePrint</Button>
                <Button bsSize='small' onClick={this.view.bind(this,'View')} > View</Button>
                <Button bsSize='small' onClick={this.stop.bind(this, 'Stop')} >Stop </Button>
                <Button bsSize='small' onClick={this.hold.bind(this, 'Hold')} >Hold</Button>
                <Button bsSize='small' onClick={this.releaseHold.bind(this, 'ReleaseHold')} >Release Hold </Button>

            </ButtonGroup>


        );
    }
}

module.exports = LowerSidePanel;
