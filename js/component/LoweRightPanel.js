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
var ShoppingRequestHistoryPanel = require('./ShoppingRequestHistoryPanel');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class LowerRightPanel extends React.Component {
    constructor() {
        super();

    }



    render() {



        return(
            <div>

                <table>
                     <tr>

                        <td > <ShoppingRequestHistoryPanel />  </td>
                    </tr>

                </table>

            </div>

        );
    }
}

module.exports = LowerRightPanel;

