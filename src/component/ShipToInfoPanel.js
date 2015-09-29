/**
 * Created by vedangm on 08/27/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var UpperHeader = require('./UpperHeader');
var FormInput = require('../core/FormInput');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;
var Input = ReactBoot.Input;
var Label = ReactBoot.Label;
var assign = require('object-assign');


class ShipToInfoPanel extends React.Component {

    constructor(props) {
        super(props);

     }

    handleInputChange(key, event) {
        var partialState = {};
     //   partialState[key] = event.target ? event.target.value : event;
        partialState[key] = event;
        //this.setState(partialState);
        //this.props.ShipInfo.contact(partialState[key]);

        var method_prefix = "this.props.ShipInfo.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);

        var xmlhttp =new XMLHttpRequest();

        //new_method(partialState[key]);

        //window[method_prefix + method_name](partialState[key]);

    }

    email () {
        alert('Button Email clicked');
    }

    render() {
        var company = this.props.ShipToInfo.company;
        var PO = this.props.ShipToInfo.PO;
        var contact = this.props.ShipToInfo.contact;
        var Addr1 = this.props.ShipToInfo.Addr1;
        var Addr2 = this.props.ShipToInfo.Addr2;
        var Addr3 = this.props.ShipToInfo.Addr3;
        var city = this.props.ShipToInfo.city;
        var state = this.props.ShipToInfo.state;
        var Zip = this.props.ShipToInfo.Zip;
        var phone = this.props.ShipToInfo.phone;
		var department = this.props.ShipToInfo.department;

      //  console.log('company>>', company);

        return (
            <Grid >
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Ship To Information' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={1} sm={1}><label>PO#</label> </Col>
                                    <Col xs={2} sm={2}>
                                         <FormInput isRequired={true} value={PO} fieldUpdated={this.handleInputChange.bind(this, 'PO')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Company</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired={true} value={company} fieldUpdated={this.handleInputChange.bind(this, 'company')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Contact</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired={true} value={contact} fieldUpdated={this.handleInputChange.bind(this, 'contact')} />

                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={1} sm={1}><label>Address</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput value={Addr1} onChange={this.handleInputChange.bind(this, 'Addr1') }/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Line2</label> </Col>
                                    <Col xs={2} sm={2}><FormInput isRequired={false} value={Addr2} onChange={this.handleInputChange.bind(this, 'Addr2') } /></Col>
                                </Row>

                                <Row>
                                    <Col xs={1} sm={1}><label>Line3</label> </Col>
                                    <Col xs={2} sm={2}><FormInput value={Addr3} onChange={this.handleInputChange.bind(this, 'Addr3') } /></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>City</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired={true} value={city} fieldUpdated={this.handleInputChange.bind(this, 'city')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>State</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired={true} value={state} fieldUpdated={this.handleInputChange.bind(this, 'state')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Zip</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired={true} value={Zip} fieldUpdated={this.handleInputChange.bind(this, 'Zip') } />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Country</label></Col>
                                    <Col xs={2} sm={2}><Input type= 'select' bsSize="small" id="country" name="Country" onChange={this.handleInputChange.bind(this, 'department') }>
                                                            <option value="India">India</option>
                                                            <option value="United States">United States</option>
                                                       </Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Phone</label> </Col>
                                    <Col xs={2} sm={2}>
                                        <FormInput isRequired = {true} value={phone} fieldUpdated ={this.handleInputChange.bind(this, 'phone') }/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Department</label> </Col>
                                    <Col xs={2} sm={2}> <Input type= 'select' bsSize="small" id="department" name="department" onChange={this.handleInputChange.bind(this, 'department') } >
                                                            <option value="Shipping Department">Shipping DepartMent</option>
                                                            <option value="Sales Department">Sales DepartMent</option>
                                                        </Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={2} sm={2}></Col>
                                    <Col xs={1} sm={1}><Button bsSize='small' bsStyle='info' id="btnEmail" onClick={this.email} >Email </Button> </Col>

                                </Row>

                             </Grid>

                        </Panel>

                    </Col>
                </Row>
            </Grid>
        );

    }
}

module.exports = ShipToInfoPanel;
