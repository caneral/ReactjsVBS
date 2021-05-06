import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { Form } from 'react-bootstrap';
import React, { useState, useRef,useEffect } from "react";
import AuthService from "../../../Services/AuthService";

const SignUp1 = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [userName, setTCNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    

    //T.C numarasını tcnumber state ine at.
    const onChangeTCNumber = (e) => {
        const userName = e.target.value;
        setTCNumber(userName);
    };

    //Şifreyi password state ine at.
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

      //Giriş yap butonuna bastıktan sonra
      const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);
    
        //form.current.validateAll();
          AuthService.login(userName, password).then(
            () => {
              window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        
      };
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <Form onSubmit={handleLogin}>
                                <h3 className="mb-4">Giriş Yap</h3>
                                <div className="input-group mb-3">
                                    <input
                                     type="text"
                                     className="form-control"
                                     placeholder="T.C. Kimlik No"
                                     onChange={onChangeTCNumber}/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" 
                                    className="form-control" 
                                    placeholder="Şifre" 
                                    onChange={onChangePassword}/>
                                </div>
                                
                                <button className="btn btn-primary shadow-2 mb-1">Giriş Yap</button>
                                </Form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    
}

export default SignUp1;