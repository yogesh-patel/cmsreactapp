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
        this.currentlyLoadedXML = null;
        this.state={

            xmlObject:{
                shipToInfo:{
                    company: "Wyne Company",
                    PO: "",
                    contact: "Mr Wayne",
                    Addr1: "475 Vally Rd",
                    Addr2: "",
                    Addr3: "",
                    city: "wayne",
                    state: "NJ",
                    zip: "7470",
                    phone: "1212121212"
                },
                BillingInfo:{
                  account: ""
                },
                PanelInstance:{
                    CustomerCode: ""
                },
                Instructions:{
                    Package: "",
                    Shipment: ""
                },
                SpecialServices:{
                    SpecialService: ""
                },
                LTL:{
                    freightClass: ""
                },
                CarrierDeliveryInfo:{
                    shipVia: "",
                    delivery: ""
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
                <UpperHeader xmlObject={this.state.xmlObject}/>
            </Panel>
        );
    }
}

module.exports = MainComponent;