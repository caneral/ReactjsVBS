import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';
// import Form from "react-validation/build/form";

import Aux from "../hoc/_Aux";
import HomeWorkService from "../Services/HomeWorkService";
import { useHistory } from "react-router";
import AuthService from "../Services/AuthService";
import AnnouncementService from "../Services/AnnouncementService";
const Duyuru = () => {
    const history = useHistory();
    const form = useRef();
    const [announcement, setAnnouncement] = useState("");
    const [classId, setClass] = useState("");
    const [classes, setClasses] = useState([]);
    const [teacherId,setTeacherId] = useState("");
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(user){
            setTeacherId(user.userId);
        }
    }, []);
    const onChangeAnn = (e) => {
        const announcement = e.target.value;
        setAnnouncement(announcement);
    };
    const onChangeClass = (e) => {
        const classId = e.target.value;
        setClass(classId);
        console.log("SEÇİLEN DEĞER:",classId);
    };

    const announcementAdd = (e) => {
        e.preventDefault();
        try {
            
            AnnouncementService.addAnnouncement(announcement,classId,teacherId).then(
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
    useEffect(() => {
        HomeWorkService.getClassList().then(
            (response) => {
                setClasses(response.data);
            },
            (error) => {
                const _classes =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setClasses(_classes);
            }
        );
    }, []);
    return (
        <Aux>
            <Row>
                <Col>

                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Duyuru Gönder</Card.Title>

                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={announcementAdd} ref={form}>

                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Sınıf Seçiniz</Form.Label>
                                            <Form.Control as="select" onChange={onChangeClass}>
                                                <option disabled selected>Seçiniz</option>
                                                {
                                                    classes.map((data, index) => {
                                                        const { id, name } = data
                                                        return (
                                                            <option value={id}>{name}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Duyuru Açıklaması</Form.Label>
                                            <Form.Control as="textarea" rows="10" style={{ height: 218, resize: 'none' }}
                                                onChange={onChangeAnn} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
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
