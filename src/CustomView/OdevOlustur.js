import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';
// import Form from "react-validation/build/form";

import Aux from "../hoc/_Aux";
import HomeWorkService from "../Services/HomeWorkService";
import { useHistory } from "react-router";

const OdevOlustur = () => {
    const history = useHistory();
    const form = useRef();
    const [courseName, setCourseName] = useState("");
    const [homeworkSubject, setSubject] = useState("");
    const [homeworkDesc, setDesc] = useState("");
    const [classId, setClass] = useState("");
    const [classes, setClasses] = useState([]);

    const onChangeCourseName = (e) => {
        const courseName = e.target.value;
        setCourseName(courseName);
    };
    const onChangeSubject = (e) => {
        const homeworkSubject = e.target.value;
        setSubject(homeworkSubject);
    };
    const onChangeDesc = (e) => {
        const homeworkDesc = e.target.value;
        setDesc(homeworkDesc);
    };
    const onChangeClass = (e) => {
        const classId = e.target.value;
        setClass(classId);
        console.log("SEÇİLEN DEĞER:",classId);
    };

    const homeWorkAdd = (e) => {
        e.preventDefault();
        try {
            HomeWorkService.addHomeWork(courseName, homeworkSubject, homeworkDesc, classId).then(
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
                            <Card.Title as="h5">Ödev Oluştur</Card.Title>

                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={homeWorkAdd} ref={form}>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Sınıf Seçiniz</Form.Label>
                                            <Form.Control as="select" onChange={onChangeClass}>
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
                                        <Form.Group controlId="exampleForm.ControlForm.Control1">
                                            <Form.Label>Ders Adı</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Matematik, Türkçe,..."
                                                onChange={onChangeCourseName} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlForm.Control1">
                                            <Form.Label>Ödev Konusu</Form.Label>
                                            <Form.Control type="text" placeholder="Matematik, Türkçe,..."
                                                onChange={onChangeSubject} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Ödev Açıklaması</Form.Label>
                                            <Form.Control as="textarea" rows="10" style={{ height: 218, resize: 'none' }}
                                                onChange={onChangeDesc} />
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                        <Button variant="primary" type="submit">Gönder</Button>
                                    </Col>
                                    {/* Tasarımı ayarla. */}
                                </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}


export default OdevOlustur;
