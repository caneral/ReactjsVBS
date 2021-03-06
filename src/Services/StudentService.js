import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const getStudentListWithClass = (classN) => {
  return Axios.get(`${URL}/api/Student/StudentListWithClass`,
  {params: {
    classN: classN
  }}, 
  { headers: authHeader() });
};
const getTotalStudentCount = () => {
  return Axios.get(`${URL}/api/Student/GetTotalStudentCount`, { headers: authHeader() })
};
export default {getStudentListWithClass,getTotalStudentCount};