/**
 * Created by vedangm on 08/26/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;
var PackageParametersPanel = require('./PackageParametersPanel');
var InstructionsPanel = require('./InstructionsPanel');
var Panel = ReactBoot.Panel;

class ThirdPanel extends React.Component {
    constructor(props){
        super(props);


    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.thirdPanelObj.PackageParameters.height(partialState[key]);
        this.setState(partialState);
    }

    carton () {
        alert('Button Carton clicked');
    }

    render (){

        return(

           <div id="ThirdUpperPanel">
                    <table>
                        <tbody>
                            <tr >
                                <td >
                                    <PackageParametersPanel packageParameters = {this.props.thirdPanel.PackageParameters} packageParams = {this.props.thirdPanelObj.PackageParameters} />
                                </td>
                            </tr>

                            <tr >
                                <td >
                                    <InstructionsPanel instructions = {this.props.thirdPanel.Instructions} InstructionsInfo = {this.props.thirdPanelObj.Instructions} />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

        );
    }

}

module.exports = ThirdPanel;