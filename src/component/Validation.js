/**
 * Created by vedangm on 08/26/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var MainComponent = require('./MainComponent');

/*function Validate()
{
    if(this.props.FirsPanelObject.shipToInfo.company == ""){
        alert("Company field can not be empty");
    }
   /!* if(this.props.value.FirsPanelObject.shipToInfo.Phone.match(number) ){
        alert("Enter only numeric field in Phone Number");
    }*!/

}*/

class Validation extends React.Component {
    constructor(props) {
        super(props);


        this.xmlErrorObject = {
            FirsPanelObject:{
                    shipToInfo:{
                        company: "", // index.xmlDoc.getElementsByTagName("Company")[0].childNodes[0].nodeValue
                        companyError: "",
                        PO: "",
                        POError: "",
                        contact: "",
                        contactError: "",
                        Addr1: "",
                        Addr1Error: "",
                        Addr2: "",
                        Addr2Error: "",
                        Addr3: "",
                        Addrr3Error: "",
                        city: "",
                        cityError: "",
                        State: "",
                        StateError: "",
                        Zip: "7",
                        ZipError: "",
                        phone: "",
                        phoneError: "",
                        department: "",
                        departmentError: ""
                    },
                PanelInstance:{
                    CustomerCode: "555",
                    CustomerCodeError: ""
                }
            },
            SecondPanelObject:{

                CarrierDeliveryInfo:{
                    shipVia: "",
                    shipViaError: "",
                    delivery: "",
                    deliveryError: ""
                },
                BillingInfo:{
                    account: "234234",
                    accountError: "",
                    billDuty: "",
                    billDutyError: ""
                },
                SpecialServices:{
                    SpecialService: "",
                    SpecialServiceError: ""
                },
                LTL:{
                    freightClass: "",
                    freightClassError: ""
                },
            },
            ThirdPanel:{
                Instructions:{
                    Package: "",
                    PackageError: "",
                    Shipment: "",
                    ShipmentError: ""
                },

                PackageParameters:{
                    PackageCount: "Wyne Company",
                    PackageCountError: "",
                    Package: "",
                    PackageError: "",
                    Weight: "",
                    WeightError: "",
                    length: "",
                    lenghError: "",
                    width: "",
                    widthError: "",
                    height: "",
                    heightError: "",
                    deliveredBy: "",
                    deliveredByError: "",
                    units: "",
                    unitsError: ""
                }
            },
            UpperSidePanel:{
                CreateRequest: "",
                RatePackage: "",
                RequestToHold: "",
                VerifyAddress: "",
                Details: "",
                International: "",
                ClearAll: ""
            },
            LowerSidePanel:{
                RePrint: "",
                View: "",
                Stop: "",
                Hold: "",
                ReleaseHold: ""
            }

        };

        this.Validate(this.props);
    }

    Validate (props)
    {
        if(this.props.Nest.FirsPanelObject.shipToInfo.company == ""){
            alert("Company field can not be empty");
        }
   /*     if(this.props.value.FirsPanelObject.shipToInfo.Phone.match(number) ){
            alert("Enter only numeric field in Phone Number");
        }*/

    }
    render() {
      //  var Main = this.props.myXMLOBj;

        return (

            <div >
              /*  <MainComponent value={this.xmlErrorObject}/>*/
            </div>

        );

    }
}

module.exports = Validation;
