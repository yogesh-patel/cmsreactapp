/**
 * Created by vedangm on 08/26/2015.
 */
'use strict';

let React = require('react');
var ReactBoot = require('react-bootstrap');
var Nav = ReactBoot.Nav;
var NavItem = ReactBoot.NavItem;
var Grid = ReactBoot.Grid;
var Row = ReactBoot.Row;
var Col = ReactBoot.Col;
var Panel = ReactBoot.Panel;
const navInstance = ReactBoot.navInstance;
var FirstPanel = require('./FirstPanel');
var SecondPanel = require('./SecondPanel');
var ThirdPanel = require('./ThirdPanel');
var LowerSidePanel = require('./LowerSidePanel');
var LowerRightPanel = require('./LoweRightPanel');
var UpperSidePanel = require('./UpperSidePanel');


class UpperHeader extends React.Component {
    constructor(props,state) {
        super(props, state);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.setState(partialState);
    }

    update(){
    var modifiedValue=this.refs.inputValue.getDOMNode().value;
    this.props.updateValue(modifiedValue);
}
    render() {

        function handleSelect (selectedKey) {
            alert('selected ' + selectedKey);
        }


        return (

            <Panel>

                <Grid >
                    <Row className='show-grid'>
                        <Panel>
                        <Col xs={1} sm={1} ><UpperSidePanel /> </Col>
                        <Col xs={4} sm={4} ><FirstPanel firstPanel ={this.props.xmlObject.FirsPanelObject}/></Col>
                        <Col xs={4} md={4}><SecondPanel secondPanel = {this.props.xmlObject.SecondPanelObject} /></Col>
                        <Col  xs={3} md={3}><ThirdPanel thirdPanel = {this.props.xmlObject.ThirdPanel} /></Col>
                        </Panel>
                    </Row>

                    <Row className='show-grid'>
                        <Panel>
                            <Col  xs={2} md={2}><LowerSidePanel /></Col>
                            <Col  xs={10} md={10}><LowerRightPanel /></Col>
                        </Panel>
                    </Row>
                    <Row>
                        <Col sm={12}> <input type="text" value={this.props.value} onChange={this.handleInputChange.bind(this, 'company')} /></Col>
                     </Row>

                </Grid>

            </Panel>

    );

    }
}

module.exports = UpperHeader;
