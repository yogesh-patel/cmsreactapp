/**
 * Created by vedangm on 08/27/2015.
 */
'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var UpperHeader = require('./UpperHeader');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;

class PanelInstance extends React.Component {

    constructor(props) {
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
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
        var state = this.props.ShipToInfo.State;
        var zip = this.props.ShipToInfo.Zip;
        var phone = this.props.ShipToInfo.phone;

        return (
            <Grid >
                <Row>
                    <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Ship To Information' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col xs={1} sm={1}><label>PO#</label> </Col>
                                    <Col xs={3} sm={3}> <input type="text" value={PO} onChange={this.handleInputChange.bind(this, 'PO') } /></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Company</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={company} onChange={this.handleInputChange.bind(this, 'company') }  /></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Contact</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={contact} onChange={this.handleInputChange.bind(this, 'contact') }/></Col>
                                </Row>

                                <Row>
                                    <Col xs={1} sm={1}><label>Address</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={Addr1} onChange={this.handleInputChange.bind(this, 'Addr1') }/></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Line2</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={Addr2} onChange={this.handleInputChange.bind(this, 'Addr2') } /></Col>
                                </Row>

                                <Row>
                                    <Col xs={1} sm={1}><label>Line3</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={Addr3} onChange={this.handleInputChange.bind(this, 'Addr3') } /></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>City-State-Zip</label> </Col>
                                    <Col xs={3} sm={3}>
                                        <input type="text" bsSize="small" id="txtCity" value={city} onChange={this.handleInputChange.bind(this, 'city') } />
                                        <input type="text" bsSize="small" id="txtState" value={state} onChange={this.handleInputChange.bind(this, 'state') } />
                                        <input type="text" bsSize="small" id="txtZip" value={zip} onChange={this.handleInputChange.bind(this, 'zip') } />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Country</label></Col>
                                    <Col xs={3} sm={3}><select id="units1" name="department" >
                                                         <option value="in.">India</option>
                                                         <option value="in">United States</option>
                                                     </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Phone</label> </Col>
                                    <Col xs={3} sm={3}><input type="text" value={phone} onChange={this.handleInputChange.bind(this, 'phone') } /></Col>
                                </Row>
                                <Row>
                                    <Col xs={1} sm={1}><label>Department</label> </Col>
                                    <Col xs={3} sm={3}> <select id="units1" name="department" >
                                                        <option value="in.">in.</option>
                                                        <option value="in">Cm</option>
                                                    </select>
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

module.exports = PanelInstance;
