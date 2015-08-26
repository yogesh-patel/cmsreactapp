/**
 * Created by vedangm on 08/25/2015.
 */


'use strict';
/*var React = require('react');

 var mui = require('material-ui');
 var ThemeManager = new mui.Styles.ThemeManager();*/

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class LowerRightPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '300px'
        };
    }



    render() {




        return(
            <div>

                <table>
                    <thead>
                    <tr className="trHeader">
                        <td colSpan="10"> <input type="button" id="min" value="*" /><label id="customer">Shopping Request History</label><input type="button" value="-" style={{"float":"right"}} /></td>
                    </tr>
                    <tr style={{"background-color":"silver"}}>
                        <td style={{"width":"100px"}}><label>Select</label></td>
                        <td style={{"width":"130px"}}><label>Request Number</label></td>
                        <td style={{"width":"100px"}}><label>Contact</label></td>
                        <td style={{"width":"100px"}}><label>Company</label></td>
                        <td style={{"width":"100px"}}><label>Status</label></td>
                        <td style={{"width":"100px"}}><label>Ship Via</label></td>
                        <td style={{"width":"100px"}}><label>Weight</label></td>
                        <td style={{"width":"100px"}}><label>Cost</label></td>
                        <td style={{"width":"80px"}}><label>Box</label></td>
                    </tr>

                    </thead>
                    <tbody>
                    <tr></tr>
                    </tbody>
                </table>


            </div>

        );
    }
}

module.exports = LowerRightPanel;

