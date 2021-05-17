import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const addMeet = (meetDate,studentId,teacherId) => {
  return Axios.post(`${URL}/api/Meet/MeetAdd`,
  {
    meetDate,
    studentId,
    teacherId
  }, 
  { headers: authHeader() });
};

export default {addMeet};