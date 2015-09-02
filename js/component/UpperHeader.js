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
    constructor(props) {
        super(props);

    }

    handleInputChange(key, event) {
        var partialState = {};
        partialState[key] = event.target.value;
        this.props.NestedCallback.FirsPanelObject.shipToInfo.company(partialState[key]);

        this.setState(partialState);
    }

/*    update(){
    var modifiedValue=this.refs.inputValue.getDOMNode().value;
    this.props.company(modifiedValue);
}*/
    render() {

        function handleSelect (selectedKey) {
            alert('selected ' + selectedKey);
        }


        return (

            <Panel>

                <Grid >
                    <Row className='show-grid'>
                        <Panel>
                        <Col xs={1} sm={1} ><UpperSidePanel upperSidePanel = {this.props.xmlObject.UpperSidePanel} upperSidePanelObj = {this.props.NestedCallback.UpperSidePanel }/> </Col>
                        <Col xs={4} sm={4} ><FirstPanel firstPanel ={this.props.xmlObject.FirsPanelObject} firstPanelObj = {this.props.NestedCallback.FirsPanelObject}/></Col>
                        <Col xs={4} md={4}><SecondPanel secondPanel = {this.props.xmlObject.SecondPanelObject} secondPanelObj = {this.props.NestedCallback.SecondPanelObject} /></Col>
                        <Col  xs={3} md={3}><ThirdPanel thirdPanel = {this.props.xmlObject.ThirdPanel} thirdPanelObj = {this.props.NestedCallback.ThirdPanel}/></Col>
                        </Panel>
                    </Row>

                    <Row className='show-grid'>
                        <Panel>
                            <Col  xs={1} md={1}><LowerSidePanel lowerSidePanel = {this.props.xmlObject.LowerSidePanel}  lowerSidePanelObj = {this.props.NestedCallback.LowerSidePanel} /></Col>
                            <Col  xs={11} md={11}><LowerRightPanel /></Col>
                        </Panel>
                    </Row>

                </Grid>

            </Panel>

    );

    }
}

module.exports = UpperHeader;
