import React, { Component, Suspense, useEffect, useState } from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";

import './app.scss';
import Odevler from '../../../CustomView/Odevler';
import Odevlerim from '../../../CustomView/Odevlerim';
import OdevOlustur from '../../../CustomView/OdevOlustur';
import Ogrenciler from '../../../CustomView/Ogrenciler';
import AuthService from "../../../Services/AuthService";
import Anasayfa from '../../../CustomView/Anasayfa';
import Duyuru from '../../../CustomView/Duyuru';
import Toplanti from '../../../CustomView/Toplanti';

const AdminLayout = (props) => {
    const isUserLoggedIn = localStorage.getItem('user')
    const [admin,setShowAdminBoard] = useState(false);
    const user = AuthService.getCurrentUser();

  
    // fullScreenExitHandler = () => {
    //     if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
    //         props.onFullScreenExit();
    //     }
    // };

    // componentWillMount() {
    //     if (props.windowWidth > 992 && props.windowWidth <= 1024 && props.layout !== 'horizontal') {
    //         props.onComponentWillMount();
    //     }
    // }

    // mobileOutClickHandler() {
    //     if (props.windowWidth < 992 && props.collapseMenu) {
    //         props.onComponentWillMount();
    //     }
    // }

  

        /* full screen exit call */
        // document.addEventListener('fullscreenchange', fullScreenExitHandler);
        // document.addEventListener('webkitfullscreenchange', fullScreenExitHandler);
        // document.addEventListener('mozfullscreenchange', fullScreenExitHandler);
        // document.addEventListener('MSFullscreenChange', fullScreenExitHandler);

        // const menu = routes.map((route, index) => {
        //     return (route.component) ? (
        //         <Route
        //             key={index}
        //             path={route.path}
        //             exact={route.exact}
        //             name={route.name}
        //             render={props => (
        //                 <route.component {...props} />
        //             )} />
        //     ) : (null);
        // });

        return (
            <Aux>
                <Fullscreen enabled={props.isFullScreen}>
                    <Navigation />
                    <NavBar />
                    {/* onClick={() => mobileOutClickHandler} */}
                    <div className="pcoded-main-container" >
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader/>}>
                                                <Switch>
                                                    {/* {menu} */}
                                                    <Redirect exact from='/' to='/anasayfa'></Redirect>
                                                    <Route path="/veli/veli-toplanti">
                                                        {
                                                            isUserLoggedIn ? user.role.includes("Admin") ? <Toplanti/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                        }
                                                    </Route>
                                                    <Route path="/duyuru/duyuru-gonder" >
                                                        {
                                                            isUserLoggedIn ? user.role.includes("Admin") ? <Duyuru/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                        }
                                                    </Route>
                                                    <Route path="/odevler/odevlerim" >
                                                        {
                                                            isUserLoggedIn ? user.role.includes("Student") ? <Odevlerim/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                        }
                                                    </Route>
                                                    <Route path="/odev/odevler" >
                                                        {
                                                            isUserLoggedIn ? user.role.includes("Admin") ? <Odevler/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                        }
                                                    </Route>
                                                    <Route path="/odev/odev-olustur">
                                                    {
                                                            isUserLoggedIn ? user.role.includes("Admin") ? <OdevOlustur/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                        }
                                                    </Route>
                                                    <Route path="/ogrenci/ogrenciler">
                                                    {
                                                            isUserLoggedIn ? user.role.includes("Admin") ? <Ogrenciler/> : <Redirect to="/anasayfa"/> : <Redirect to="/auth/signin"/>
                                                    }
                                                    </Route>
                                                    <Route path="/anasayfa">
                                                        {
                                                        isUserLoggedIn ? user.role.includes("Admin") ? <Anasayfa/> : <Redirect to="/odevler/odevlerim"/> : <Redirect to="/auth/signin"/>

                                                        }
                                                    </Route>
                                                    
                                                    <Redirect to="/auth/signin" />
                                                </Switch>
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }


const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));