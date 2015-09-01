/**
 * Created by synerzip on 25/08/15.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var Panel = ReactBoot.Panel;
var UpperHeader = require('./UpperHeader');


class MainComponent extends React.Component {
    constructor(props){
        super(props);

        this.callbacks = {
            FirsPanelObject:{
                shipToInfo:{
                    company: function(newValue) {
                        alert(newValue);
                    },
                    PO: function(newValue) {
                        alert(newValue);
                    },
                    contact: function(newValue) {
                        alert(newValue);
                    },
                    Addr1:function(newValue) {
                        alert(newValue);
                    },
                    Addr2:function(newValue) {
                        alert(newValue);
                    },
                    Addr3:function(newValue) {
                        alert(newValue);
                    },
                    city:function(newValue) {
                        alert(newValue);
                    },
                    State:function(newValue) {
                        alert(newValue);
                    },
                    Zip:function(newValue) {
                        alert(newValue);
                    },
                    phone:function(newValue) {
                        alert(newValue);
                    },
                    department:function(newValue) {
                        alert(newValue);
                    },
                },
                PanelInstance:{
                    CustomerCode: function(newValue) {
                        alert(newValue);
                    }
                }
            },
            SecondPanelObject:{
                CarrierDeliveryInfo:{
                    shipVia: function(newValue) {
                        alert(newValue);
                    },
                    delivery: function(newValue){
                        alert(newValue);
                    }

                },
                BillingInfo: {
                    account : function (newValue){
                        alert(newValue);
                    },
                    billDuty: function (newValue) {
                        alert(newValue);
                    }
                },
                SpecialServices:  {
                    SpecialService: function (newValue) {
                        alert(newValue);
                    }
                },
                LTL:{
                    freightClass: function (newValue) {
                        alert(newValue);
                    }
                }
            },
            ThirdPanel: {
                Instructions: {
                    Package: function (newValue) {
                        alert(newValue);
                    },
                    Shipment: function (newValue) {
                        alert(newValue);
                    }
                },
                PackageParameters: {
                    PackageCount: function (newValue) {
                        alert(newValue);
                    },
                    Package: function (newValue) {
                        alert(newValue);
                    },
                    Weight: function (newValue) {
                        alert(newValue);
                    },
                    length: function (newValue) {
                        alert(newValue);
                    },
                    width: function (newValue) {
                        alert(newValue);
                    },
                    height: function (newValue) {
                        alert(newValue);
                    },
                    deliveredBy: function (newValue) {
                        alert(newValue);
                    },
                    units: function (newValue) {
                        alert(newValue);
                    },

                },
            }

        };

        this.state={

            xmlObject:{

                FirsPanelObject:{
                    shipToInfo:{
                        company: "Wayne Company",
                        PO: "",
                        contact: "Mr Wayne",
                        Addr1: "475 Vally Rd",
                        Addr2: "",
                        Addr3: "",
                        city: "wayne",
                        State: "NJ",
                        Zip: "7470",
                        phone: "1212121212",
                        department: "1212121212"
                    },
                    PanelInstance:{
                        CustomerCode: "555"
                    }
                },
                SecondPanelObject:{

                    CarrierDeliveryInfo:{
                        shipVia: "",
                        delivery: ""
                    },
                    BillingInfo:{
                        account: "234234",
                        billDuty: ""
                    },
                    SpecialServices:{
                        SpecialService: ""
                    },
                    LTL:{
                        freightClass: ""
                    },

                },
                ThirdPanel:{
                    Instructions:{
                        Package: "",
                        Shipment: ""
                    },

                    PackageParameters:{
                        PackageCount: "Wyne Company",
                        Package: "",
                        Weight: "",
                        length: "",
                        width: "",
                        height: "",
                        deliveredBy: "",
                        units: ""
                    }
                }

            }


        };


    }


    render() {
        return (
            <Panel>
                <Navbar brand='Home' inverse toggleNavKey={0}>
                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                        <NavItem eventKey={1} href='#'>Ship</NavItem>
                        <NavItem eventKey={2} href='#'>Manage</NavItem>
                        <NavItem eventKey={2} href='#'>View</NavItem>
                        <NavItem eventKey={2} href='#'>Help</NavItem>

                    </Nav>
                </Navbar>
                <UpperHeader xmlObject={this.state.xmlObject} value={this.state.value} updateValue={this.updateValue} NestedCallback = {this.callbacks}/>
            </Panel>
        );
    }
}

module.exports = MainComponent;