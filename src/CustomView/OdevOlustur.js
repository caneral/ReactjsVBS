import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';

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
    const [fileH, setFile] = useState(null);


    //Hata mesajları
    const [courseNameErr, setCourseNameErr] = useState({});
    const [homeworkSubjectErr, setSubjectErr] = useState({});
    const [homeworkDescErr, setDescErr] = useState({});
    const [classIdErr, setClassErr] = useState({});

    


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
    };
    const onChangeFile = (e) => {
        const fileH = e.target.files[0];
        setFile(fileH);
    };

    const homeWorkAdd = (e) => {
        e.preventDefault();
        try {
            const isValid = formValidation();
            if(isValid){
                HomeWorkService.addHomeWork(courseName, homeworkSubject, homeworkDesc, classId).then(
                    (response) => {
                        if(fileH){
                            const file = new FormData();    
                            file.append('file',fileH);
                            HomeWorkService.addHomeWorkFile(response.data,file).then(
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
                        }else{
                            history.push("/anasayfa");
                        }
                        
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
            }
            
            
        } catch (error) {
            alert(e.message);

        }


    };
    const formValidation = () => {
        const courseNameErr = {};
        const homeworkSubjectErr = {};
        const homeworkDescErr = {};
        const classIdErr = {};

        let isValid = true;

        if(courseName.trim().length>0 && courseName.trim().length < 3){
            courseNameErr.courseNameShort = "Ders adı en az 3 karakter olmalıdır.";
            isValid = false;
        }
        if(courseName.trim().length == 0){
            courseNameErr.courseNameEmpty = "Bu alan boş bırakılamaz."
            isValid = false;
        }
        if(homeworkSubject.trim().length>0 && homeworkSubject.trim().length < 3){
            homeworkSubjectErr.homeworkSubjectShort = "Ödev konusu en az 3 karakter olmalıdır.";
            isValid = false;
        }
        if(homeworkSubject.trim().length == 0){
            homeworkSubjectErr.homeworkSubjectEmpty = "Bu alan boş bırakılamaz."
            isValid = false;
        }

        if(homeworkDesc.trim().length>0 && homeworkDesc.trim().length < 10){
            homeworkDescErr.homeworkDescShort = "Ödev Açıklaması en az 10 karakter olmalıdır.";
            isValid = false;
        }
        if(homeworkDesc.trim().length == 0){
            homeworkDescErr.homeworkDescEmpty = "Bu alan boş bırakılamaz."
            isValid = false;
        }
        if(classId.length == 0){
            classIdErr.classIdEmpty = "Lütfen sınıf seçiniz."
            isValid = false;
        }

        setCourseNameErr(courseNameErr);
        setSubjectErr(homeworkSubjectErr);
        setDescErr(homeworkDescErr);
        setClassErr(classIdErr);
        return isValid;
    }
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
                                                <option selected disabled>Seçiniz</option>
                                                {
                                                    classes.map((data, index) => {
                                                        const { id, name } = data
                                                        return (
                                                            <option value={id}>{name}</option>
                                                        )
                                                    })
                                                }
                                                
                                            </Form.Control>
                                            {Object.keys(classIdErr).map((key) => {
                                                    return <div style={{color:"red"}}>{classIdErr[key]}</div>
                                            })}
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlForm.Control1">
                                            <Form.Label>Ders Adı</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Matematik, Türkçe,..."
                                                onChange={onChangeCourseName} />
                                            {Object.keys(courseNameErr).map((key) => {
                                                    return <div style={{color:"red"}}>{courseNameErr[key]}</div>
                                            })}
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlForm.Control1">
                                            <Form.Label>Ödev Konusu</Form.Label>
                                            <Form.Control type="text" placeholder="Matematik, Türkçe,..."
                                                onChange={onChangeSubject} />
                                            {Object.keys(homeworkSubjectErr).map((key) => {
                                                    return <div style={{color:"red"}}>{homeworkSubjectErr[key]}</div>
                                            })}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Ödev Açıklaması</Form.Label>
                                            <Form.Control as="textarea" rows="10" style={{ height: 218, resize: 'none' }}
                                                onChange={onChangeDesc} />
                                                {Object.keys(homeworkDescErr).map((key) => {
                                                    return <div style={{color:"red"}}>{homeworkDescErr[key]}</div>
                                            })}
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Dosya ekle" accept="image/*" onChange={onChangeFile}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>

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


export default OdevOlustur;
