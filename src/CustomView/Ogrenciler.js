import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';

import StudentService from '../Services/StudentService';

const Ogrenciler = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        StudentService.getStudentList().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);
    return (
        <Aux>
            <Row>

                <Col>
                    <Tabs defaultActiveKey="1/A" id="uncontrolled-tab-example">
                        <Tab eventKey="1/A" title="1/A">
                            <Card.Title as='h5'>Öğrenciler</Card.Title>

                            <Table responsive hover>
                                <tbody>
                                    {
                                        content.map((data, index) => {
                                            const { id, tcNumber, name, surname, number, className, parentName, parentSurname } = data
                                            return (
                                                <tr className="unread" key={index}>
                                                    <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                                    <td>
                                                        <h6 className="mb-1">{name + " " + surname}</h6>
                                                        <p className="m-0">Öğrenci numarası: {number}</p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">{className}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />{tcNumber}</h6>
                                                    </td>
                                                    <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Detay</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Ödev Ver</a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="1/B" title="1/B">
                        </Tab>
                        <Tab eventKey="1/C" title="1/C">
                        </Tab>
                        <Tab eventKey="1/D" title="1/D">
                        </Tab>
                        <Tab eventKey="2/A" title="2/A">
                        </Tab>
                        <Tab eventKey="2/B" title="2/B">
                        </Tab>
                        <Tab eventKey="2/C" title="2/C">
                        </Tab>
                        <Tab eventKey="2/D" title="2/D">
                        </Tab>
                        <Tab eventKey="3/A" title="3/A">
                        </Tab>
                        <Tab eventKey="3/B" title="3/B">
                        </Tab>
                        <Tab eventKey="3/C" title="3/C">
                        </Tab>
                        <Tab eventKey="3/D" title="3/D">
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Aux>
    );
}


export default Ogrenciler;