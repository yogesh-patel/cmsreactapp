/**
 * Created by vedangm on 08/26/2015.
 */

'use strict';

var React = require('react');
var ReactBoot = require('react-bootstrap');
var Button = ReactBoot.Button;
var Input = ReactBoot.Input;

class ThirdPanel extends React.Component {
    constructor(){
        super();

        this.state = {PackageCount: "Wyne Company",
            Package: "",
            Weight: "",

        };

    }
    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }

    carton () {
        alert('Button Carton clicked');
    }
    instructions () {
        alert('Button Instructions clicked');
    }

    render (){
        var PackageCount = this.state.PackageCount;
        var Package = this.state.Package;
        var Weight = this.state.Weight;

        return(

           <div id="ThirdUpperPanel">
                    <table>
                        <tbody>
                        <tr className="trHeader">
                            <td colSpan="2"> <Button bsSize='small' > * </Button>
                                <label id="packageParam">Package Parameters</label>
                                <Button bsSize='small' style={{"float":"right" }}> - </Button></td>
                        </tr>
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
                        <tr style={{"background-color":"silver"}}>
                            <td colSpan="2"  style={{"font-weight":"bold"}}>Weight</td>
                        </tr>
                        <tr>
                            <td><label>Weight</label></td>
                            <td><label>Units</label></td>
                        </tr>
                        <tr>
                            <td><input type="text" value={Weight} onChange={this.handleInputChange.bind(this, 'Weight') }/></td>
                            <td>
                                <select id="DeliveredBy" name="DeliveredBy" >
                                    <option value="in.">in.</option>
                                    <option value="in">Cm</option>
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
                                    <label style={{"width":"100px"}}>Height  </label><label style={{"width":"70px", "float":"center" ,"margin-left":"20px"}}>   Units</label>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td><div><input type="text" style={{"width":"70px"}} /><input type="text" style={{"width":"70px","margin-left":"10px"}} /></div></td>

                            <td class="td-width">
                                <div>
                                    <input type="text"  style={{"width":"70px"}} />
                                    <select id="DeliveredBy" name="DeliveredBy" >
                                        <option value="in.">in.</option>
                                        <option value="in">Cm</option>
                                    </select>
                                </div>
                            </td>

                        </tr>
                        <tr className="trHeader">
                            <td colSpan="2"> <Button bsSize='small' > * </Button>
                                <label id="instructions">Instructions</label>
                                <Button bsSize='small' style={{"float":"right" }}> - </Button></td>
                        </tr>
                        <tr>
                            <td><label>Shipment</label></td>
                            <td><Button bSize="xsmall" bsStyle='info' onClick={this.instructions} style={{"float":"right"}} >Instructions</Button> </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="text" style={{"overflow-y":"scroll"}} /></td>
                        </tr>
                        <tr><td colSpan="2"><label>Package</label></td></tr>
                        <tr>
                            <td colSpan="2"><input type="text" style={{"overflow-y":"scroll"}} /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>


        );
    }

}

module.exports = ThirdPanel;