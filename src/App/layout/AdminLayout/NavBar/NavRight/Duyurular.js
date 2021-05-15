import React, { Component, useEffect, useState } from 'react';
import AnnouncementService from "../../../../../Services/AnnouncementService";
import { Dropdown } from 'react-bootstrap';

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';
import AuthService from "../../../../../Services/AuthService";

const Duyurular = (props) => {
    const [content, setContent] = useState([]);
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {

        AnnouncementService.getMessageList(currentUser.userId || 0).then(
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
    }, [])
    return (
        <div>
            
                    <Dropdown alignRight={!props.rtlLayout}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            <i className="icon feather icon-bell" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Duyurular</h6>

                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">Yeni</p>
                                </li>
                                {
                                    content.map((data, index) => {
                                        const { id, desc, teacherName, teacherSurname } = data;
                                        return (
                                            <div>
                                                <li className="notification">
                                                    <div className="media">
                                                        <img className="img-radius" src={Avatar2} alt="Generic placeholder" />
                                                        <div className="media-body">
                                                            <p><strong className="text-danger">{teacherName + " " + teacherSurname}</strong><span className="n-time text-muted"><i
                                                                className="icon feather icon-clock m-r-10" />Tarih gelecek</span></p>
                                                            <p>{desc}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                
        </div>
    )
}

export default Duyurular
