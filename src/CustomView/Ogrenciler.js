import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';

import StudentService from '../Services/StudentService';
import OgrenciGetir from "./OgrenciGetir";

const Ogrenciler = () => {

    return (
        <Aux>
            <Row>

                <Col>
                    <Tabs defaultActiveKey="1/A" id="uncontrolled-tab-example">
                        <Tab eventKey="1/A" title="1/A">
                            <Card.Title as='h5'>Öğrenciler</Card.Title>
                        <OgrenciGetir classN="1/A"/>
                        </Tab>
                        <Tab eventKey="1/B" title="1/B">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="1/B"/>

                        </Tab>
                        <Tab eventKey="1/C" title="1/C">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="1/C"/>

                        </Tab>
                        <Tab eventKey="1/D" title="1/D">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="1/D"/>

                        </Tab>
                        <Tab eventKey="2/A" title="2/A">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="2/A"/>

                        </Tab>
                        <Tab eventKey="2/B" title="2/B">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="2/B"/>

                        </Tab>
                        <Tab eventKey="2/C" title="2/C">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="2/C"/>

                        </Tab>
                        <Tab eventKey="2/D" title="2/D">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="2/D"/>

                        </Tab>
                        <Tab eventKey="3/A" title="3/A" >
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="3/A"/>

                        </Tab>
                        <Tab eventKey="3/B" title="3/B">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="3/B"/>

                        </Tab>
                        <Tab eventKey="3/C" title="3/C">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="3/C"/>

                        </Tab>
                        <Tab eventKey="3/D" title="3/D">
                        <Card.Title as='h5'>Öğrenciler</Card.Title>

                        <OgrenciGetir classN="3/D"/>

                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Aux>
    );
}


export default Ogrenciler;