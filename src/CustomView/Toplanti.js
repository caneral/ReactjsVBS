
import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import '../assets/css/Calendar.css';

import Aux from "../hoc/_Aux";
import { useHistory, useLocation } from "react-router";
import AuthService from "../Services/AuthService";



import MeetService from '../Services/MeetService';


const Duyuru = () => {

    const history = useHistory();
    const location = useLocation();
    const form = useRef();

    const [meetDate, setMeet] = useState("");
    const [studentId, setStudent] = useState("");
    const [teacherId, setTeacherId] = useState("");

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        setStudent(location.ogrenciId);
        if (location.ogrenciId == undefined) {
            history.push("/ogrenci/ogrenciler");
        }
        if (user) {
            setTeacherId(user.userId);
        }
    }, []);
    useEffect(() => {
        
    }, [])
    const onChangeMeetDate = (e) => {
        const meetDate = e.target.value;
        console.log("Tarih:", meetDate);
        setMeet(meetDate);
    };

    

    const meetAdd = (e) => {
        e.preventDefault();
        try {

            MeetService.addMeet(meetDate, studentId, teacherId).then(
                () => {
                    history.push("/anasayfa");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        } catch (error) {
            alert(e.message);

        }


    };
    return (
        <Aux>
            <Row>
                <Col md="3">

                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Veli İle Görüş</Card.Title>

                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={meetAdd} ref={form}>

                                <Row>
                                    <h4></h4>
                                    <Col md={12}>
                                        <Form.Label>Toplantı Tarihi</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="12 Mayıs 2021 Saat 14:30"
                                            onChange={onChangeMeetDate} />
                                    </Col>
                                    <Col className="text-center">
                                        <Button variant="primary" type="submit">Gönder</Button>
                                    </Col>
                                </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}


export default Duyuru;
