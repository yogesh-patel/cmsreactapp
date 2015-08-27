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
        return(
           <ButtonGroup vertical>
                 <Button bsSize='small' onClick={this.rePrint}  > RePrint</Button>
                <Button bsSize='small' onClick={this.view} > View</Button>
                <Button bsSize='small' onClick={this.stop} >Stop </Button>
                <Button bsSize='small' onClick={this.hold} >Hold</Button>
                <Button bsSize='small' onClick={this.releaseHold} >Release Hold </Button>

            </ButtonGroup>


        );
    }
}

module.exports = LowerSidePanel;
