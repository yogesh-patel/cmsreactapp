/**
 * Created by vedangm on 09/08/2015.
 */



var React = require('react');
var ReactBoot = require('react-bootstrap');
//var xml2js = require('xml2js');
//var fs = require('fs');

var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var Panel = ReactBoot.Panel;
var UpperHeader = require('./UpperHeader');
 var parseObject = "";

/*var importFile = function() {
    console.log("started import");
    var file = "E:\Ni\cmsreactapp\src\Component\ShipSchema.xml";
    console.log(file);
    $.get(file, function(data) {
        var lines = data.split("\n");
        var id = 0;
        $.each(lines, function(n, elem) {
            parseLine(elem, id);
            id++;
        });
        console.log("done parsing.");
    }, "text");
    console.log("done getting");
};

importFile()*/

var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
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
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});


var xmlhttp=new XMLHttpRequest();

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

class MainComponent extends React.Component{
    constructor(props){
        super(props);
        var self = this;


    //    var parser = new xml2js.Parser();
      //  var src = fs.readFileSync('../ApiData' + '/ShipSchema.xml');
      //  var data = fs.readFile("../ApiData/ShipSchema.xml", "utf8");
     /*   fs.readfile('../ApiData' + '/ShipSchema.xml','utf8', function(err, data) {
            parser.parseString(src, function (err, result) {
                console.dir(result);
                console.log(data);
            });
        });*/

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
                    State: "",
                    Zip: "7",
                    phone: "",
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
                    PackageCount: "Wyne Company",
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
                alert(xmlhttp.responseText);

                parseString(xmlhttp.responseText, function (err, result) {
                    console.dir(result);
                    // parseObject = result;
                    self.myXMLOBj.FirsPanelObject.shipToInfo.company = result.Shipment.Company[0];
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


        this.callbacks = {
            FirsPanelObject:{
                shipToInfo:{
                    company: function(newValue) {
                        var comp =  self.myXMLOBj.FirsPanelObject.shipToInfo.company = newValue;
                        //  this.myXMLOBj.FirsPanelObject.shipToInfo.company = newValue;
                        self.setState({xmlObject : self.myXMLOBj});
                        alert(newValue);

                    },
                    PO: function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.PO = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    contact: function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.contact = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Addr1:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.Addr1 = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Addr2:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.Addr2 = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Addr3:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.Addr3 = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    city:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.city = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    State:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.state = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Zip:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.Zip = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    phone:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.phone = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    department:function(newValue) {
                        self.myXMLOBj.FirsPanelObject.shipToInfo.department = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                },
                PanelInstance:{
                    CustomerCode: function(newValue) {
                        self.myXMLOBj.FirsPanelObject.PanelInstance.CustomerCode = newValue;
                        self.setState({xmlObject: self.myXMLOBj});

                        alert(newValue);
                    }
                }
            },
            SecondPanelObject:{
                CarrierDeliveryInfo:{
                    shipVia: function(newValue) {
                        self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.shipVia = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    delivery: function(newValue){
                        self.myXMLOBj.SecondPanelObject.CarrierDeliveryInfo.delivery = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    }

                },
                BillingInfo: {
                    account : function (newValue){
                        self.myXMLOBj.SecondPanelObject.BillingInfo.account = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    billDuty: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.BillingInfo.billDuty = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    }
                },
                SpecialServices:  {
                    SpecialService: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.SpecialServices.SpecialService = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    }
                },
                LTL:{
                    freightClass: function (newValue) {
                        self.myXMLOBj.SecondPanelObject.LTL.freightClass = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    }
                }
            },
            ThirdPanel: {
                Instructions: {
                    Package: function (newValue) {
                        self.myXMLOBj.ThirdPanel.Instructions.Package = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Shipment: function (newValue) {
                        self.myXMLOBj.ThirdPanel.Instructions.Shipment = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    }
                },
                PackageParameters: {
                    PackageCount: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.PackageCount = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Package: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.Package = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    Weight: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.Weight = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    length: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.length = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    width: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.width = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    height: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.height = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    deliveredBy: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.deliveredBy = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                    units: function (newValue) {
                        self.myXMLOBj.ThirdPanel.PackageParameters.units = newValue;
                        self.setState({xmlObject: self.myXMLOBj});
                        alert(newValue);
                    },
                },
            },
            UpperSidePanel: {
                CreateRequest: function (newValue) {
                    alert('Button Create Request clicked');
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

                <Navbar brand='Home' inverse toggleNavKey={0}>
                    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                        <NavItem eventKey={1} href='#'>Ship</NavItem>
                        <NavItem eventKey={2} href='#'>Manage</NavItem>
                        <NavItem eventKey={2} href='#'>View</NavItem>
                        <NavItem eventKey={2} href='#'>Help</NavItem>
                    </Nav>
                </Navbar>
                <UpperHeader xmlObject={this.state.xmlObject} value={this.state.value} updateValue={this.updateValue} NestedCallback = {this.callbacks}/>
            </div>
        );
    }
}

module.exports = MainComponent;
