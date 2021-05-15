import React, { Component, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';
import AuthService from "../../../../../Services/AuthService";
import AnnouncementService from "../../../../../Services/AnnouncementService";
import Duyurular from './Duyurular';
const NavRight = (props) => {
    const [content, setContent] = useState([]);

    const [name, setName] = useState("###");
    const [role, setRole] = useState("###");
    const currentUser = AuthService.getCurrentUser();
    useEffect(() => {
        if (currentUser) {

            setName(currentUser.name);
            if (currentUser.role == "Teacher") {
                setRole("Öğretmen")
            } else if (currentUser.role == "Student") {

                setRole("Öğrenci");
            } else if (currentUser.role == "Admin") {
                setRole("Yönetici")
            }
        }
    }, []);

    
    const logOut = () => {
        AuthService.logout();
    };
    return (
        <Aux>
            <ul className="navbar-nav ml-auto">
                <li>
                {
                   currentUser && currentUser.role == "Student" && <Duyurular props={!props.rtlLayout}/>
                }
                </li>
                <li>
                    <Dropdown alignRight={!props.rtlLayout} className="drp-user">
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            <i className="icon feather icon-settings" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <div className="pro-head">
                                <img src={Avatar2} className="img-radius" alt="User Profile" />
                                <span>{name + " (" + role + ")"}</span>
                                <a href={"/auth/signin"} className="dud-logout" title="Logout" onClick={logOut}>
                                    <i className="feather icon-log-out" />
                                </a>
                            </div>
                            <ul className="pro-body">
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings" /> Ayarlar</a></li>
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user" /> Profil</a></li>
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail" /> Mesajlarım</a></li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </Aux>
    );
}


export default NavRight;
