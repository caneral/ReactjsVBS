import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const getHomeWorkList = () => {
  return Axios.get(`${URL}/api/HomeWork/HomeWorkList`, { headers: authHeader() });
};
const addHomeWork = (courseName,homeworkSubject,homeworkDesc,classId) => {
    return Axios
      .post(`${URL}/api/HomeWork/HomeWorkAdd`, {
        courseName,
        homeworkSubject,
        homeworkDesc,
        classId
      },{ headers: authHeader() })
    
  };

const getClassList = () => {
  return Axios.get(`${URL}/api/Class/ClassList`, { headers: authHeader() })
};
export default {addHomeWork,getHomeWorkList,getClassList};