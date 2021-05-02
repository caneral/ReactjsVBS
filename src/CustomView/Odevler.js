import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
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
                                        <th>Sınıf</th>
                                        <th>Ders Adı</th>
                                        <th>Ödev Konusu</th>
                                        <th>Ödev Açıklaması</th>
                                        <th>Oluşturulma Tarihi</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1/A</th>
                                        <td>Matematik</td>
                                        <td>Soru Çözümü</td>
                                        <td>Ders kitabından sayfa 40 ile 45 arasındaki soruları çözünüz.</td>
                                        <td>2 Mart 2021</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2/A</th>
                                        <td>Türkçe</td>
                                        <td>Kitap Okuma</td>
                                        <td>"Ahmet" isimli kitabı 5 kere okuyun</td>
                                        <td>10 Nisan 2021</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3/A</th>
                                        <td>Hayat Bilgisi</td>
                                        <td>İnsanlar</td>
                                        <td>Çevrenizdeki insanlara sorular sorun ve defterinize özet yazınız.</td>
                                        <td>21 Nisan 2021</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;