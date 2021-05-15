import React, { useState, useEffect } from "react";

import { Row, Col, Card, Badge, Button,Modal } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

import HomeWorkService from '../Services/HomeWorkService';
import AuthService from '../Services/AuthService';
const Odevlerim = () => {
  const [content, setContent] = useState([]);
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
  return (
    <Aux>

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
            <Card key={index}>
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

