import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const getStudentList = () => {
  return Axios.get(`${URL}/api/Student/StudentList`, { headers: authHeader() });
};
const getTotalStudentCount = () => {
  return Axios.get(`${URL}/api/Student/GetTotalStudentCount`, { headers: authHeader() })
};
export default {getStudentList,getTotalStudentCount};