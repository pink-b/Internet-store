import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { Context } from '..';

const Shop = () => {
    const {device} = useContext(Context)
    return (
        <Container >
            <Row className="mt-3">
                <Col md={3}>
                <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
            Shop
        </Container> 
    );
};

export default Shop;