import React, { useState, useEffect } from "react";

import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

import HomeWorkService from '../Services/HomeWorkService';
const Odevler = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    HomeWorkService.getHomeWorkList().then(
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
          <Card>
            <Card.Header>
              <Card.Title as="h5">Ödevler</Card.Title>
              <span className="d-block m-t-5">Oluşturduğunuz ödevleri burada görebilirsiniz.</span>
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
                    content.map((data, index) => {
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

export default Odevler;

