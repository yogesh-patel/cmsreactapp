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

class ThirdPanel extends React.Component {
    constructor(){
        super();

        this.state = {PackageCount: "Wyne Company",
            Package: "",
            Weight: "",

        };

    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }

    carton () {
        alert('Button Carton clicked');
    }

    render (){
        var PackageCount = this.state.PackageCount;
        var Package = this.state.Package;
        var Weight = this.state.Weight;

        return(

           <div id="ThirdUpperPanel">
                    <table>
                        <tbody>
                        <tr >
                            <td >
                                <PackageParametersPanel />
                            </td>
                        </tr>

                        <tr >
                            <td >
                                <InstructionsPanel />
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>


        );
    }

}

module.exports = ThirdPanel;