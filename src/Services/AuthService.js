import axios from "axios";
import jwtDecode from 'jwt-decode';
import { useHistory } from "react-router";
const API_URL = "https://caneral.me/vbsadmin/api/v1/login";

const login = (userName, password) => {
  return axios
    .post(API_URL, {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.href();
  
};

const getCurrentUser = () => {
  const token = localStorage.getItem("user");
  if(token){
    const decocedToken = jwtDecode(token); //Kodu çözümlediği yer.
    let currentDate = new Date(); //Geçerli tarihi alır.
    
    var fark = decocedToken.exp*1000-currentDate.getTime(); //decocedToken.exp token süresinin hangi milisaniyede biteceğini söylüyor. Örneğin decode işlemi saat 21:24 de oldu token süresi 3 dakika ise decocedToken 21:27(milisaniye cinsinden) dir.
    var total_seconds = parseInt(Math.floor(fark / 1000)); //Token süresini ms den saniyeye çevirir.
    var minutes = Math.floor(total_seconds / 60); //Token süresini dakika cinsinden verir.
    var seconds = String(total_seconds - minutes*60).padStart(2,'0');//Dakika dan kalan saniyeyi verir.
    console.log('Kalan Token Süresi : ',minutes+':'+seconds);
    
    if(decocedToken.exp*1000 < currentDate.getTime()){
      console.log("Token expired.");
      logout();
      window.location.reload();
    }else{
      const userData = {
        email:decocedToken.email,
        name:decocedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        role:decocedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        id:decocedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
      };    
      return userData;
    }
    
  }
};

export default {
  login,
  logout,
  getCurrentUser,
};
