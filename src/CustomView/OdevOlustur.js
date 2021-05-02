import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';


import Aux from "../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Ödev Oluştur</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Sınıf Seçiniz</Form.Label>
                                                <Form.Control as="select">
                                                    <option>1/A</option>
                                                    <option>2/A</option>
                                                    <option>3/A</option>
                                                    <option>4/A</option>
                                                    <option>5/A</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Ders Adı</Form.Label>
                                                <Form.Control type="email" placeholder="Matematik, Türkçe,..." />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Ödev Konusu</Form.Label>
                                                <Form.Control type="email" placeholder="Matematik, Türkçe,..." />
                                            </Form.Group>

                                            <Button variant="primary">
                                                Gönder
                                            </Button>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Ödev Açıklaması</Form.Label>
                                            <Form.Control as="textarea" rows="10" style={{ height: 218, resize: 'none' }} />
                                        </Form.Group>
                                       
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
