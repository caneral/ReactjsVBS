import React, { useState, useEffect } from "react";

import { Row, Col, Card, Badge,Button } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

import HomeWorkService from '../Services/HomeWorkService';
import AuthService from '../Services/AuthService';
const Odevlerim = () => {
  const [content, setContent] = useState([]);
  const user = AuthService.getCurrentUser();
  useEffect(() => {
    console.log(user.userId)
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
      <Row>
        <Col>

          {

            content.map((data, index) => {
              const { id, courseName, homeworkSubject, homeworkDesc, className } = data
              const ikon = () => {
                if(courseName == "Matematik"){
                  return <i className="feather icon-percent"/>
                }else if(courseName == "Türkçe"){
                  return <i className="feather icon-feather"/>
                }else if(courseName == "Hayat Bilgisi"){
                  return <i className="feather icon-sun"/>
                }else{
                  return <i className="feather icon-more-paperclip"/>
                }
              }
              const dersAdi = () => {
                if(courseName == "Matematik"){
                  return <Button variant={"warning"} style={{width:200}}>
                    {courseName}
              </Button>
                }else if(courseName == "Türkçe"){
                 return <Button variant={"danger"} style={{width:200}}>
                    {courseName}
              </Button>
                }else if(courseName == "Hayat Bilgisi"){
                  return <Button variant={"success"} style={{width:200}}>
                    {courseName}
              </Button>
                }
              }
              
              return (
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">  {dersAdi()}</Card.Title>
                    <span className="d-block m-t-5">{homeworkSubject}</span>
                  </Card.Header>
                  <Card.Body>
                     <h4>{homeworkDesc} </h4>
                  </Card.Body>
                </Card>
                    )
                    })
                    }
            
        </Col>
      </Row>
    </Aux>
  );

}

export default Odevlerim;

