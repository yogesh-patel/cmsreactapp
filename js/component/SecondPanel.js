/**
 * Created by vedangm on 08/26/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;
var CarrierDeliveryInfoPanel = require('./CarrierDeliveryInfoPanel');
var BillingInfoPanel = require('./BillingInfoPanel');
var SpecialServicesPanel = require('./SpecialServicesPanel');
var LTLPanel = require('./LTLPanel');
class SecondPanel extends React.Component{

    constructor(props) {
        super(props);


    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.secondPanelObj.BillingInfo.account(partialState[key]);
        this.setState(partialState);
    }
    selects () {
        alert('Button Select clicked');
    }

    render(){

        return(

                    <div  id="SecondUpperPanel">
                        <table>
                        <tbody>
                            <tr >
                               <td > <CarrierDeliveryInfoPanel carrierDeliveryInfo = {this.props.secondPanel.CarrierDeliveryInfo} carrierDeliveryInfo = {this.props.secondPanelObj.CarrierDeliveryInfo}/> </td>

                            </tr>



                            <tr>
                               <td >
                                    <BillingInfoPanel billingInfo = {this.props.secondPanel.BillingInfo} BillInfo = {this.props.secondPanelObj.BillingInfo} />
                               </td>
                            </tr>


                            <tr >
                                <td> <SpecialServicesPanel specialServices = {this.props.secondPanel.SpecialServices}  Special = {this.props.secondPanelObj.SpecialServices} /> </td>
                            </tr>

                            <tr >
                                <td>
                                    <LTLPanel ltlInfo = {this.props.secondPanel.LTL} ltl = {this.props.secondPanelObj.LTL} />
                                </td>
                            </tr>


                        </tbody>
                        </table>
                    </div>

        );
    }

}

module.exports = SecondPanel;
