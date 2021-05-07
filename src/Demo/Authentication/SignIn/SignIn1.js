import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Form from "react-validation/build/form";
import React, { useState, useRef,useEffect } from "react";
import AuthService from "../../../Services/AuthService";
import {Redirect, useHistory} from "react-router-dom";

const SignUp1 = () => {
  const history = useHistory();

  const isUserLoggedIn = localStorage.getItem('user')


  const form = useRef();
  const checkBtn = useRef();

  const [userName, setTCNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorM, setError] = useState("");

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

  const onValidate = (e) => {
    if (userName.length == 0 && password.length == 0) {
      setError("Kullanıcı adı ve şifre boş bırakılamaz.");
    } else if (userName.length == 0) {
      setError("Kullanıcı adı boş bırakılamaz.");
    } else if (password.length == 0) {
      setError("Şifre boş bırakılamaz.");
    }else{
      setError("");
    }
  };



  //Giriş yap butonuna bastıktan sonra
  const handleLogin = (e) => {


    e.preventDefault();
    onValidate();
    setMessage("");
    setLoading(true);

try {
  AuthService.login(userName, password).then(
    () => {
      // window.location.reload();
      history.push("/anasayfa");
    },
    (error) => {
      if(error.message){
        const resMessage = "Kullanıcı adı veya şifreniz hatalı.";
        setLoading(false);
        setMessage(resMessage);
      }
      // const resMessage =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();


    }
  );
} catch (error) {
  alert(e.message);
}

   

  };
  return (
    <Aux>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <Form onSubmit={handleLogin} ref={form}>
                <h3 className="mb-4">Giriş Yap</h3>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="tcnumber"
                    className="form-control"
                    placeholder="T.C. Kimlik No"
                    onChange={onChangeTCNumber} />
                </div>
                <div className="input-group mb-4">
                  <input type="password"
                    name="userPassword"
                    className="form-control"
                    placeholder="Şifre"
                    onChange={onChangePassword} />
                </div>
                <div className="form-group">
                <button className="btn btn-primary shadow-2 mb-1" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Giriş Yap</span>
            </button>
                </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {errorM}
                      <br />
                      {message}
                    </div>
                  </div>
                )}
              </Form>

            </div>
          </div>
        </div>
      </div>
    </Aux>
  );

}

export default SignUp1;