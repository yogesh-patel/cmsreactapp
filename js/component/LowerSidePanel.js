/**
 * Created by vedangm on 08/25/2015.
 */


'use strict';

let React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Panel = ReactBoot.Panel;

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
           <div>
                <p> <Button  onClick={this.rePrint} style={{"width":"120px"}} > RePrint</Button> </p>
                <p><Button  onClick={this.view} style={{"width":"120px"}}> View</Button></p>
                <p><Button  onClick={this.stop} style={{"width":"120px"}}>Stop </Button> </p>
                <p><Button  onClick={this.hold} style={{"width":"120px"}}>Hold</Button> </p>
                <p> <Button onClick={this.releaseHold} style={{"width":"120px"}}>Release Hold </Button> </p>

            </div>


        );
    }
}

module.exports = LowerSidePanel;
