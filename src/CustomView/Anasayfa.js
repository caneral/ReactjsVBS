import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';
import HomeWorkService from '../Services/HomeWorkService';
import StudentService from '../Services/StudentService';
import AnnouncementService from '../Services/AnnouncementService';
const Anasayfa = () => {

    const [content, setContent] = useState([]);
    const [odevler, setOdevler] = useState([]);
    const [studentCount, setStudentCount] = useState([]);
    const [annCount,setAnnCount] = useState([]);
    useEffect(() => {
        HomeWorkService.getTotalHomeWorkCount().then(
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
        StudentService.getTotalStudentCount().then(
            (response) => {
                setStudentCount(response.data);
            },
            (error) => {
                const _studentC = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

                setStudentCount(_studentC);
            }
        );
        AnnouncementService.getTotalAnnouncementCount().then(
            (response) => {
                setAnnCount(response.data);
            },
            (error) => {
                const _annCount = 
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

                setStudentCount(_annCount);
            }
        )
    }, []);
    useEffect(() => {
        HomeWorkService.getLastAdded5HomeWorks().then(
            (response) => {
                setOdevler(response.data);
            },
            (error) => {
                const _odevler =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setOdevler(_odevler);
            }
        );
    }, []);
    return (
        <Aux>
            <Row>
            <Col md={6} xl={4}>
                    <Card>
                    <Card.Body className='border-bottom'>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-file-text f-30 text-c-green" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">{content}</h3>
                                    <span className="d-block text-uppercase">TOPLAM ÖDEV SAYISI</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                    <Card.Body className='border-bottom'>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-users f-30 text-c-blue" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">{studentCount}</h3>
                                    <span className="d-block text-uppercase">TOPLAM ÖĞRENCİ SAYISI</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                    <Card.Body className='border-bottom'>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-mail f-30 text-c-red" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">{annCount}</h3>
                                    <span className="d-block text-uppercase">TOPLAM DUYURU SAYISI</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={12}>
                    <Card className='Recent-Users'>
                        <Card.Header>
                            <Card.Title as='h5'>En son yüklenen ödevler</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>Ödev Numarası</th>
                                        <th>Ders Adı</th>
                                        <th>Ödev Konusu</th>
                                        <th>Ödev Açıklaması</th>
                                        <th>Sınıf</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        odevler.map((data, index) => {
                                            const { id, courseName, homeworkSubject, homeworkDesc, className } = data
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{id}</th>
                                                    <td>{courseName}</td>
                                                    <td>{homeworkSubject}</td>
                                                    <td>{homeworkDesc}</td>
                                                    <td>{className}</td>
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


export default Anasayfa;