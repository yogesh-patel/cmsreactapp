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
                   <Col xs={4} sm={4}>
                        <Panel collapsible defaultExpanded header='Package Parameters' bsStyle='info'>

                            <table>
                                <tr>
                                    <td colSpan="2"><label style={{"font-weight":"bold"}}>Box Information</label></td>
                                </tr>
                                <tr style={{"background-color":"silver"}}>
                                    <td>Package Count</td>
                                    <td>Package#</td>
                                </tr>
                                <tr>
                                    <td><input type="text" value={PackageCount} onChange={this.handleInputChange.bind(this, 'PackageCount') }/></td>
                                    <td><input type="text"  value={Package} onChange={this.handleInputChange.bind(this, 'Package') }/> <br /></td>

                                </tr>
                                <tr>
                                    <td colSpan="2"  style={{"font-weight":"bold"}}>Weight</td>
                                </tr>
                                <tr>
                                    <td><label>Weight</label></td>
                                    <td><label>Units</label></td>
                                </tr>
                                <tr>
                                    <td><input type="text" value={Weight} onChange={this.handleInputChange.bind(this, 'Weight') }/></td>
                                    <td>
                                        <select id="DeliveredBy" name="DeliveredBy" style={{"margin-left":"10px"}} onChange={this.handleInputChange.bind(this, 'deliveredBy') }>
                                            <option value="in.">in.</option>
                                            <option value="Cm">Cm</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><label style={{"font-weight":"bold"}}>Dimentions</label></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><Button bsStyle='info' bSize="xsmall" onClick={this.carton}  style={{"float":"right"}}> Carton</Button> </td>
                                </tr>
                                <tr>
                                    <td style={{"background-color":"silver"}}>
                                        <div>
                                            <label style={{"width":"70px"}}>Length  </label><label style={{"width":"70px","margin-left":"20px"}}>   Width</label>
                                        </div>
                                    </td>

                                    <td style={{"background-color":"silver"}}>
                                        <div>
                                            <label style={{"width":"70px"}}>Height  </label><label style={{"width":"70px" ,"margin-left":"10px"}}>   Units</label>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td><div><input type="text" style={{"width":"70px"}}  value={length} onChange={this.handleInputChange.bind(this, 'length') } />
                                        <input type="text" style={{"width":"70px","margin-left":"10px"}}  value={width} onChange={this.handleInputChange.bind(this, 'width') } /></div></td>

                                    <td class="td-width">
                                        <div>
                                            <input type="text"  style={{"width":"70px"}}  value={height} onChange={this.handleInputChange.bind(this, 'height') }/>
                                            <select id="units" name="units" style={{"margin-left":"10px"}} onChange={this.handleInputChange.bind(this, 'units') } >
                                                <option value="in.">in.</option>
                                                <option value="Cm">Cm</option>
                                            </select>
                                        </div>
                                    </td>

                                </tr>

                            </table>
                        </Panel>
                   </Col>
            </Row>
            </Grid>
        );

    }
}

module.exports = PackageParametersPanel;