import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const addAnnouncement = (announcement,classId,teacherId) => {
  return Axios.post(`${URL}/api/Message/MessageAdd`,
  {
      desc:announcement,
      classId,
      teacherId
  }, 
  { headers: authHeader() });
};

const getMessageList = (userId) => {
return Axios.get(`${URL}/api/Message/MessageListWithClass/${userId}`,{headers: authHeader()})
};

const getTotalAnnouncementCount = () => {
  return Axios.get(`${URL}/api/Message/GetTotalMessageCount`, { headers: authHeader() })
};
export default {addAnnouncement,getMessageList,getTotalAnnouncementCount};