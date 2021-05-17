import StudentService from '../Services/StudentService';
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Tabs, Tab,Button } from 'react-bootstrap';
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';
import { Link, Redirect } from 'react-router-dom';

import Toplanti from './Toplanti';
const OgrenciGetir = (classN) => {
    const [content, setContent] = useState([]);
    
    useEffect(() => {
        StudentService.getStudentListWithClass(classN.classN).then(
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
        <Table responsive hover>

        <tbody>
 {
            content.map((data, index) => {
                const { id, tcNumber, name, surname, number, className, parentName, parentSurname } = data
                return (
                    <tr className="unread" key={index}>
                        <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                        <td>
                            <h6 className="mb-1">{name + "  " + surname}</h6>
                            <p className="m-0">Öğrenci numarası: {number}</p>
                        </td>
                        <td>
                            <h6 className="text-muted">{className}</h6>
                        </td>
                        <td>
                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />{tcNumber}</h6>
                        </td>
                        <td>
                            
                            <a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Ödev Ver</a>
                            <Link to={{pathname: '/veli/veli-toplanti', ogrenciId:id}}  className="label theme-bg2 text-white f-12">Öğrenci Velisi</Link>
                            </td>
                    </tr>
                )
            })
           }
        </tbody>
        </Table>

          
        
    )
}

export default OgrenciGetir
