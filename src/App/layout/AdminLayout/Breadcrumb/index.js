import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import config from '../../../../config';
import navigation from '../../../../menu-items';
import DEMO from "../../../../store/constant";
import Aux from "../../../../hoc/_Aux";

const Breadcrumb = (props) => {
     const[main,setMain]= useState([]);
     const[item,setItem]= useState([]);
    const isUserLoggedIn = localStorage.getItem('user')


    useEffect(() => {
        (navigation.items).map((item, index) => {
                    if (item.type && item.type === 'group') {
                        getCollapse(item, index);
                    }
                    return false;
                });
    }, [])
    useEffect( () => {
        (navigation.items).map((item, index) => {
                    if (item.type && item.type === 'group') {
                        getCollapse(item);
                    }
                    return false;
                });
    }, [navigation.items])


    const getCollapse = (item) => {
        if (item.children) {
            (item.children).filter( collapse => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse,);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === config.basename+collapse.url) {
                        setItem(collapse);
                        setMain(item);
                    }
                }
                return false;
            });
        }
    };

         const [breadcrumb,setBreadcrumb] = useState('');

         let title = 'Hoşgeldiniz';
        if (main && main.type === 'collapse') {
            main = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{main.title}</a>
                </li>
            );
        }

        if (item && item.type === 'item') {
            title = item.title;
            item = (
                <li className="breadcrumb-item">
                    <a href={DEMO.BLANK_LINK}>{title}</a>
                </li>
            );

            if(item.breadcrumbs !== false) {
                breadcrumb = (
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{title}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><i className="feather icon-home"/></Link>
                                        </li>
                                        {main}
                                        {item}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

        }

        document.title = title + ' | VBS';

        return (
            <Aux>
                {breadcrumb}
            </Aux>
        );
    }


export default Breadcrumb;