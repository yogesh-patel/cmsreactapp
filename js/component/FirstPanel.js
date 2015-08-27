/**
 * Created by vedangm on 08/26/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Panel = ReactBoot.Panel;
var PanelInstance = require('./PanelInstance');
var ShipToInfoPanel = require('./ShipToInfoPanel');

class FirstPanel extends React.Component {

    constructor() {
        super();


    }

    render() {


        return (
            <div>
                    <div id="FirstUpperPanel" >

                        <table>
                        <tbody>


                            <tr>
                                <td> <PanelInstance /></td>
                            </tr>


                            <tr>
                                  <td> <ShipToInfoPanel /> </td>
                            </tr>

                        </tbody>
                        </table>

                    </div>


            </div>
        );
    }

}

module.exports = FirstPanel;