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

class UpperHeader extends React.Component {
    render() {
        function handleSelect (selectedKey) {
            alert('selected ' + selectedKey);
        }

        return (

            <div>
                <Nav bsStyle='pills' activeKey={1} onSelect={handleSelect}>
                    <NavItem eventKey={1} href='/home'>Create Request</NavItem>
                    <NavItem eventKey={2} title='Item'>Rate Package</NavItem>
                    <NavItem eventKey={3} title='Item'>Request To Hold</NavItem>
                    <NavItem eventKey={4} title='Item'>Verify Address</NavItem>
                    <NavItem eventKey={5} title='Item'>Details</NavItem>
                    <NavItem eventKey={6}  disabled>International</NavItem>
                    <NavItem eventKey={7} title='Item'>Clear All</NavItem>
                </Nav>

                <Grid>
                    <Row className='row'>
                        <Col xs={4} sm={4}><code><FirstPanel /></code></Col>
                        <Col xs={6} md={4}><code><SecondPanel /></code></Col>
                        <Col  xs={6} md={4}><code><ThirdPanel /></code></Col>
                    </Row>

                    <Row>
                        <Col  xs={6} md={2}><code></code></Col>
                        <Col  xs={6} md={10}><code></code></Col>

                    </Row>

                </Grid>
                );


            </div>

    );
        React.render(navInstance, mountNode);
    }
}

module.exports = UpperHeader;
