import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const getStudentList = () => {
  return Axios.get(`${URL}/api/Student/StudentList`, { headers: authHeader() });
};
export default {getStudentList};