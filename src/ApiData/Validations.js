/**
 * Created by vedangm on 09/14/2015.
 */

'use strict';

var React = require('react');
var Reactboot = require('react-bootstrap');
var MainComponent = require('../Component/MainComponent');


/*
function Validate(myxmlObj)
 {
     if(myxmlObj.FirsPanelObject.shipToInfo.company == ""){
     alert("Company field can not be empty");
     }

 }
*/

class Validations extends React.Component {

    constructor(){
        super();

    //    Validate(this.props.value);
    }

    Validate()
    {
        if(this.props.value.FirsPanelObject.shipToInfo.company == ""){
            alert("Company field can not be empty");
        }
        if(this.props.value.FirsPanelObject.shipToInfo.Phone.match(number) ){
            alert("Enter only numeric field in Phone Number");
        }

    }
    render() {

        var value = this.props.value.FirsPanelObject.shipToInfo.company;
     //   var Main = <MainComponent />;
        return(
            <div>
               /* {Main.Validate()};*/
            </div>
        );
    }
}
module.exports = Validations;