/**
 * Created by vedangm on 08/27/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Navbar = ReactBoot.Navbar;
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var UpperHeader = require('./UpperHeader');
var Panel = ReactBoot.Panel;
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;
var Label = ReactBoot.Label;
var span = ReactBoot.span;


class PackageParametersPanel extends React.Component {

    constructor (props){
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;

        var method_prefix = "this.props.packageParams.";
        var method_name = key;

        var new_method = method_prefix + method_name   + "('" + partialState[key] + "');";

        var ret = eval(new_method);
    }

    carton () {
        alert('Button Carton clicked');
    }

    render() {

        var PackageCount = this.props.packageParameters.PackageCount;
        var Package = this.props.packageParameters.Package;
        var Weight = this.props.packageParameters.Weight;
        var length = this.props.packageParameters.length;
        var width = this.props.packageParameters.width;
        var height = this.props.packageParameters.height;
        var deliveredBy = this.props.packageParameters.deliveredBy;
        var units = this.props.packageParameters.units;

        return (
           <Grid>
               <Row>
                   <Col sm={3}>
                        <Panel collapsible defaultExpanded header='Package Parameters' bsStyle='info'>

                            <Grid>
                                <Row>
                                    <Col sm={2}><label style={{"font-weight":"bold"}}>Box Information</label> </Col>

                                </Row>
                                <Row>
                                     <Col sm={1}><label>Package Count</label></Col>
                                    <Col sm={1}><label>Package#</label></Col>
                                </Row>
                                <Row>
                                    <Col sm={1}><Input type="text" bsSize="meduim" value={PackageCount} onChange={this.handleInputChange.bind(this, 'PackageCount') }/></Col>
                                    <Col sm={1}><Input type="text" bsSize="medium" value={Package} onChange={this.handleInputChange.bind(this, 'Package') }/></Col>
                                </Row>
                               
                                <Row >
                                    <Col sm={2}><label style={{"font-weight":"bold"}}>Weight</label></Col>
                                </Row>
                                <Row>
                                    <Col sm={1}><label>Weight</label></Col>
                                    <Col sm={1}><label>Units</label></Col>
                                 </Row>
                                <Row>
                                    <Col sm={1}><Input type="text" value={Weight} onChange={this.handleInputChange.bind(this, 'Weight') }/></Col>
                                    <Col sm={1}> <Input type="select" id="DeliveredBy" bsSize="small"  name="DeliveredBy" onChange={this.handleInputChange.bind(this, 'deliveredBy') }>
                                                    <option value="lbs">lbs</option>
                                                    <option value="Kg">Kg</option>
                                                </Input>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col sm={2}><label style={{"font-weight":"bold"}}>Dimentions</label></Col>
                                 </Row>
                                <Row>
                                    <Col sm={2}><Button bsStyle='info' bsSize="medium" onClick={this.carton}  style={{"float":"right"}}> Carton</Button></Col>
                                 </Row>

                                <Row>
                                    <Col sm={1}><label >Length</label></Col>
                                    <Col sm={1}><label >Width</label></Col>
                                </Row>
                                <Row>
                                   <Col sm={1}><Input type="text" bsSize="small" value={length} onChange={this.handleInputChange.bind(this, 'length') } /></Col>
                                    <Col sm={1}><Input type="text" bsSize="small" value={width} onChange={this.handleInputChange.bind(this, 'width') } /> </Col>
                                 </Row>

                                <Row>
                                    <Col sm={1}><label>Height</label></Col>
                                    <Col sm={1}><label >Units</label></Col>
                                </Row>
                                <Row>
                                    <Col sm={1}>
                                        <Input type="text" bsSize="small" value={height} onChange={this.handleInputChange.bind(this, 'height') }/>
                                     </Col>
                                    <Col sm={1}>
                                        <Input type="select" id="units" bsSize="small" name="units" onChange={this.handleInputChange.bind(this, 'units') } >
                                            <option value="in.">In.</option>
                                            <option value="Cm.">Cm.</option>
                                        </Input>
                                    </Col>
                                 </Row>

                             </Grid>

                        </Panel>
                   </Col>
                 </Row>
            </Grid>
        );

    }
}

module.exports = PackageParametersPanel;