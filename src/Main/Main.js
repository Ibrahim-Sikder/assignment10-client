import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/share/Header/Header';
import LeftSideNav from '../pages/share/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>

                    <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Main;