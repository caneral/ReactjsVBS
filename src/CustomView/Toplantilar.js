
import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import '../assets/css/Calendar.css';

import Aux from "../hoc/_Aux";
import { useHistory, useLocation } from "react-router";
import AuthService from "../Services/AuthService";



import MeetService from '../Services/MeetService';


const Toplantilar = () => {
    const [meets, setMeets] = useState([]);
    useEffect(() => {
        MeetService.getMeetList().then(
            (response) => {
                setMeets(response.data);
            },
            (error) => {
                const _meets =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMeets(_meets);
            }
        );
    }, [])
    const onay = (isOkay) => {
        if(isOkay == 0){
            return <Button variant={"warning"} style={{ width: "100%" }}>
                BEKLEMEDE
              </Button>
        }else if(isOkay == 1){
            return <Button variant={"danger"} style={{ width: "100%" }}>
                KABUL EDİLDİ
              </Button>
        }
    }
    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Toplantı İstekleri</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>Toplantı Tarihi</th>
                                        <th>Öğrenci</th>
                                        <th>Öğrenci Numarası</th>
                                        <th>ONAY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        meets.reverse().map((data, index) => {
                                            const { meetDate, studentFullName, studentNumber, teacherFullName, isOkay } = data
                                            return (
                                                <tr key={index}>
                                                    <td>{meetDate}</td>
                                                    <td>{studentFullName}</td>
                                                    <td>{studentNumber}</td>
                                                    <td>{onay(isOkay)}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}


export default Toplantilar;
