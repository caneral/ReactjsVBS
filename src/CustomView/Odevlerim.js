import React, { useState, useEffect } from "react";

import { Row, Col, Card, Badge, Button,Modal } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

import HomeWorkService from '../Services/HomeWorkService';
import AuthService from '../Services/AuthService';
import MeetService from '../Services/MeetService';

const Odevlerim = () => {
  const [content, setContent] = useState([]);
  const [meet,setMeet] = useState([]);
  const [show,setShow] = useState(false);
  const user = AuthService.getCurrentUser();
  useEffect(() => {
    HomeWorkService.getHomeWorkListWithClass(user.userId).then(
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
  useEffect(() => {
    MeetService.getMeet(user.userId).then(
      (response) => {
        setMeet(response.data);
        if(response.data){
          setShow(true);
        }
      },
      (error) => {
        const _meet =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMeet(_meet);
      }
    );
  }, []);
  const meetOnayla = (id) => {
    MeetService.updateMeet(id).then(() => {
      window.location.reload();
    })
  }
  const toplantiIstegi = () => {
    return (<Card bg="dark">
    <Card.Header className="text-center ">
      <Card.Title className="text-white" >
        {
          meet.meetDate
        }
      </Card.Title>
      <span className="d-block">Öğretmen: {meet.teacherFullName} - Toplantı İsteği Gönderdi</span>
    </Card.Header>
    <Card.Body className="text-center">
    <Button variant={"danger"} onClick={() => meetOnayla(meet.id)}>ONAYLA</Button>
    </Card.Body>
    
  </Card>);
  }
  return (
    <Aux>
     {
       show &&  toplantiIstegi()
     }
      {

        content.map((data, index) => {
          const { id, courseName, homeworkSubject, homeworkDesc, fileId } = data
          const dersAdi = () => {
            if (courseName == "Matematik") {
              return <Button variant={"warning"} style={{ width: "100%" }}>
                {courseName + " (" + homeworkSubject+")"}
              </Button>
            } else if (courseName == "Türkçe") {
              return <Button variant={"danger"} style={{ width: "100%" }}>
                {courseName + " (" + homeworkSubject+")"}

              </Button>
            } else if (courseName == "Hayat Bilgisi") {
              return <Button variant={"success"} style={{ width: "100%" }}>
                {courseName + " (" + homeworkSubject+")"}

              </Button>
            } else {
              return <Button variant={"primary"} style={{ width: "100%" }}>
                {courseName + " (" + homeworkSubject+")"}

              </Button>
            }
          }

          return (
          <Card  className="box">
              <Card.Header>
                <Card.Title as="h5">
                  {dersAdi() }
                  {
                    fileId && <Button variant="dark" style={{ width: "100%" }}><a href={'https://caneral.me/vbsadmin/api/HomeWork/GetHomeworkFile?odevId='+id} target="_blank" className="text-white" download="odev.jpg">Dosyayı Görüntüle</a></Button>
                  }

                </Card.Title>
                <span className="d-block m-t-5">{ }</span>
              </Card.Header>
              <Card.Body>
                <h4>

                  {homeworkDesc} </h4>
              </Card.Body>
              
            </Card>
          
            

          );
        })
      }
    </Aux>
  );

}

export default Odevlerim;

