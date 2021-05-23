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

const getMeet =(studentId) => {
  return Axios.get(`${URL}/api/Meet/GetMeetById/${studentId}`,{headers: authHeader()});
};

const updateMeet = (id) => {
  return Axios.put(`${URL}/api/Meet/UpdateMeet/${id}`,{headers: authHeader()});
}

const getMeetList = () => {
  return Axios.get(`${URL}/api/Meet/GetMeetList`,{headers: authHeader()});
}

export default {addMeet,getMeet,updateMeet,getMeetList};