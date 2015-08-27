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
const navInstance = ReactBoot.navInstance;
var FirstPanel = require('./FirstPanel');
var SecondPanel = require('./SecondPanel');
var ThirdPanel = require('./ThirdPanel');
var LowerSidePanel = require('./LowerSidePanel');
var LowerRightPanel = require('./LoweRightPanel');

class UpperHeader extends React.Component {
    render() {
        function handleSelect (selectedKey) {
            alert('selected ' + selectedKey);
        }

        return (

            <div>
                <Nav bsStyle='pills' activeKey={0} onSelect={handleSelect}>
                    <NavItem eventKey={1} title='item'>Create Request</NavItem>
                    <NavItem eventKey={2} title='Item'>Rate Package</NavItem>
                    <NavItem eventKey={3} title='Item'>Request To Hold</NavItem>
                    <NavItem eventKey={4} title='Item'>Verify Address</NavItem>
                    <NavItem eventKey={5} title='Item'>Details</NavItem>
                    <NavItem eventKey={6}  disabled>International</NavItem>
                    <NavItem eventKey={7} title='Item'>Clear All</NavItem>
                </Nav>

                <Grid >
                    <Row className='show-grid'>
                        <Col xs={4} sm={4} ><FirstPanel /></Col>
                        <Col xs={4} md={4}><SecondPanel /></Col>
                        <Col  xs={4} md={4}><ThirdPanel /></Col>
                    </Row>

                    <Row className='show-grid'>
                        <Col  xs={2} md={2}><LowerSidePanel /></Col>
                        <Col  xs={10} md={10}><LowerRightPanel /></Col>

                    </Row>

                </Grid>


            </div>

    );

    }
}

module.exports = UpperHeader;
