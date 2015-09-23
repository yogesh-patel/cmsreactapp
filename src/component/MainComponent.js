/**
 * Created by vedangm on 09/08/2015.
 */


var React = require('react');
var ReactBoot = require('react-bootstrap');

var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var Panel = ReactBoot.Panel;
var UpperHeader = require('./UpperHeader');
//var Validation = require('./Validation');

var parseObject = "";

/*var WriteXML = function() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //   alert(xmlhttp.responseText);

            console.log(js2xmlparser("ShipMent", self.myXMLOBj));

            alert(js2xmlparser("ShipMent", self.myXMLOBj));
            //   self.setState({xmlObject: js2xmlparser("ShipMent", self.myXMLOBj)});

        }
    };
    xmlhttp.open("GET", "http://localhost:8080/ShipSchema.xml", true);
    xmlhttp.send();
}*/

var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var js2xmlparser = require("js2xmlparser");

/*
var parser = new xml2js.Parser();
parser.addListener('end', function(result) {
    console.dir(result);
    console.log('Done.');
});

efs.readFile(__dirname + '/ShipSchema.xml', function(err, data) {
    parser.parseString(data);
});
*/

var parseString = require('xml2js').parseString;
/*var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});*/

var xmlhttp=new XMLHttpRequest();
var xmlhttp1=new XMLHttpRequest();

/*function XMLDoc()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            alert(xmlhttp.responseText);

            parseString(xmlhttp.responseText, function (err, result) {
                console.dir(result);
               // parseObject = result;
             self.myXMLOBj.FirsPanelObject.shipToInfo.contact = result.Shipment.Contact[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.Addr1 = result.Shipment.Address1[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.Addr2 = result.Shipment.Address2[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.Addr3 = result.Shipment.Address3[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.city = result.Shipment.City[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.State = result.Shipment.State[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.Zip = result.Shipment.Zip[0];
             self.myXMLOBj.FirsPanelObject.shipToInfo.Phone = result.Shipment.Phone[0];

             self.setState({xmlObject : self.myXMLOBj})
            });

        }
    };
    xmlhttp.open("GET","http://localhost:8080/ShipSchema.xml",true);
    xmlhttp.send();
}*/

/*function xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};*/

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        var self = this;

        this.myXMLOBj = {
            FirsPanelObject:{
                shipToInfo:{
                    company: "", // index.xmlDoc.getElementsByTagName("Company")[0].childNodes[0].nodeValue
                    PO: "",
                    contact: "",
                    Addr1: "",
                    Addr2: "",
                    Addr3: "",
                    city: "",
                    state: "",
                    Zip: "",
                    phone: "",
                    country: "",
                    department: ""
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
                    PackageCount: "Wayne",
                    Package: "",
                    Weight: "",
                    length: "",
                    width: "",
                    height: "",
                    deliveredBy: "",
                    units: ""
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

    //    XMLDoc();
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        else
        {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
              //  alert(xmlhttp.responseText);

                parseString(xmlhttp.responseText, function (err, result) {
                    console.log('\n\n Result err>>', err);
                    // parseObject = result;
                    self.myXMLOBj.FirsPanelObject.shipToInfo.company = result.Shipment.Company[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.contact = result.Shipment.Contact[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.Addr1 = result.Shipment.Address1[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.Addr2 = result.Shipment.Address2[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.Addr3 = result.Shipment.Address3[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.city = result.Shipment.City[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.state = result.Shipment.State[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.Zip = result.Shipment.Zip[0];
                    self.myXMLOBj.FirsPanelObject.shipToInfo.phone = result.Shipment.Phone[0];
                 //   self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia = result.Shipment.Shipment.Via;

                    console.log('\n\n Result>>', result);
                    self.setState({xmlObject : self.myXMLOBj})
                });

            }
        };
        xmlhttp.open("GET","http://localhost:8080/ShipSchema.xml",true);
        xmlhttp.send();


      
        if (window.XMLHttpRequest)
        {
            xmlhttp1=new XMLHttpRequest();
        }
        else
        {
            xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp1.onreadystatechange=function()
        {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
            {
              //  alert(xmlhttp.responseText);
                parseString(xmlhttp1.responseText, function (err, result) {
                    console.log("Object_ShipVia result =>",result);
                    // parseObject = result;
                 
                    self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia = result.ShipVia.Via;
                 //   console.log('ShipViaCode =>',result.ShipVia.);
                    self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia = new Array();
               // self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia;
                    console.log("[",result.ShipVia.Via[0].$.shipviacode,"] ");
                    console.log(result.ShipVia.Via[0]._);

                    var n =0;
                    for(n=0;n<1000;n++) {
                        var shipviaCode = "[" +result.ShipVia.Via[n].$.shipviacode+"] "+result.ShipVia.Via[n]._ ;
                     
                     //   self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia.push("["result.ShipVia.Via[n].$.shipviacode"] "result.ShipVia.Via[n]._);
                     self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia.push(shipviaCode);
                      //  ("[",result.ShipVia.Via[0].$.shipviacode,"] ",result.ShipVia.Via[n]._);

                    // (result.ShipVia.Via[n]._)

                    }
                    self.setState({xmlObject : self.myXMLOBj});
                });

            }
        };
        xmlhttp1.open("GET","http://localhost:8080/ShipVia.xml",true);
        xmlhttp1.send();


        this.callbacks = {
            FirsPanelObject:{
                    shipToInfo:{
                        company: function(newValue) {
                            var comp =  self.myXMLOBj.FirsPanelObject.shipToInfo.company = newValue;
                            //  this.myXMLOBj.FirsPanelObject.shipToInfo.company = newValue;

                            self.setState({xmlObject : self.myXMLOBj});

                          //  alert(newValue);

                        },
                        PO: function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.PO = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                          //  alert(newValue);
                        },
                        contact: function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.contact = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                            alert(newValue);
                        },
                        Addr1:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.Addr1 = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                         //   alert(newValue);
                        },
                        Addr2:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.Addr2 = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                         //   alert(newValue);
                        },
                        Addr3:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.Addr3 = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                          //  alert(newValue);
                        },
                        city:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.city = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                         //   alert(newValue);
                        },
                        state:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.state = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                         //   alert(newValue);
                        },
                        Zip:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.Zip = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                         //   alert(newValue);
                        },
                        phone:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.phone = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                          //  alert(newValue);
                        },
                        country:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.department = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                          //  alert(newValue);
                        },
                        department:function(newValue) {
                            self.myXMLOBj.FirsPanelObject.shipToInfo.department = newValue;
                            self.setState({xmlObject: self.myXMLOBj});
                          //  alert(newValue);
                        },
                    },
                    PanelInstance:{
                        CustomerCode: function(newValue) {
                            self.myXMLOBj.FirsPanelObject.PanelInstance.CustomerCode = newValue;
                            self.setState({xmlObject: self.myXMLOBj});

                        //    alert(newValue);
                        }
                    }
            },
            SecondPanelObject:{
                CarrierDeliveryInfo:{
                    shipVia: function(newValue) {
                        self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    delivery: function(newValue){
                        self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.delivery = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    }

                },
                BillingInfo: {
                    account : function (newValue){
                        self.myXMLOBj.SecondPanelObject.BillingInfo.account = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    billDuty: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.BillingInfo.billDuty = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    }
                },
                SpecialServices:  {
                    SpecialService: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.SpecialServices.SpecialService = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                    //    alert(newValue);
                    }
                },
                LTL:{
                    freightClass: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.LTL.freightClass = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    }
                }
            },
            ThirdPanel: {
                Instructions: {
                    Package: function (newValue) {
                        self.myXMLOBj.ThirdPanel.Instructions.Package = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    },
                    Shipment: function (newValue) {
                        self.myXMLOBj.ThirdPanel.Instructions.Shipment = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    }
                },
                PackageParameters: {
                    PackageCount: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.PackageCount = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    Package: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.Package = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    },
                    Weight: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.Weight = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    },
                    length: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.length = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    width: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.width = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    height: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.height = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                      //  alert(newValue);
                    },
                    deliveredBy: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.deliveredBy = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    },
                    units: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.units = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                     //   alert(newValue);
                    },
                },
            },
            UpperSidePanel: {
                CreateRequest: function (newValue) {
                  alert('Button Create Request clicked');


                    if (window.XMLHttpRequest) {
                        xmlhttp = new XMLHttpRequest();
                    }
                    else {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            //   alert(xmlhttp.responseText);

                            console.log(js2xmlparser("ShipMent", self.myXMLOBj));

                            var newXml = js2xmlparser("ShipMent", self.myXMLOBj);
                          //  self.setState({xmlObject: newXml});

                            alert(newXml);

                        }
                    };
                    xmlhttp.open("GET", "http://localhost:8080/ShipSchema.xml", true);
                    xmlhttp.send();

                },
                RatePackage: function (newValue) {
                    alert('Button Rate Package clicked');
                },
                RequestToHold: function (newValue) {
                    alert('Button Request To Hold clicked');
                },
                VerifyAddress: function (newValue) {
                    alert('Button Verify Address clicked');
                },
                Details: function (newValue) {
                    alert('Button Details clicked');
                },
                International: function (newValue) {
                    alert('Button International clicked');
                },
                ClearAll: function (newValue) {
                    alert('Button Clear All clicked');
                }
            },
            LowerSidePanel: {
                RePrint: function (newValue) {
                    alert('Button reprint clicked');
                },
                View: function (newValue) {
                    alert('Button View clicked');
                },
                Stop: function (newValue) {
                    alert('Button Stop clicked');
                },
                Hold: function (newValue) {
                    alert('Button Hold clicked');
                },
                ReleaseHold: function (newValue) {
                    alert('Button ReleaseHold clicked');
                }
            }

        };


        this.state={
            xmlObject: this.myXMLOBj

        };

    }

    render() {


        return (

            <div>

                <Navbar brand='Home' inverse toggleNavKey={1}>
                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                        <NavItem eventKey={1} href='#'>Ship</NavItem>
                        <NavItem eventKey={2} href='#'>Manage</NavItem>
                        <NavItem eventKey={2} href='#'>View</NavItem>
                        <NavItem eventKey={2} href='#'>Help</NavItem>
                    </Nav>
                </Navbar>
                <UpperHeader xmlObject={this.state.xmlObject}  NestedCallback = {this.callbacks}/>

            </div>
        );
    }
}

module.exports = MainComponent;
