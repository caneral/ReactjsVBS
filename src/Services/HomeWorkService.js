import Axios from "axios"
import authHeader from "./auth-header";

const URL = "https://caneral.me/vbsadmin";

const getHomeWorkList = () => {
  return Axios.get(`${URL}/api/HomeWork/HomeWorkList`, { headers: authHeader() });
};
const getLastAdded5HomeWorks = () => {
  return Axios.get(`${URL}/api/HomeWork/GetLastAdded5HomeWorks`, { headers: authHeader() });
};
const getHomeWorkListWithClass = (userId) => {
  return Axios
    .get(`${URL}/api/HomeWork/HomeWorkListWithClass?userId=${userId}`, { headers: authHeader() });
};
const addHomeWork = (courseName, homeworkSubject, homeworkDesc, classId) => {
  return Axios
    .post(`${URL}/api/HomeWork/HomeWorkAdd`, {
      courseName,
      homeworkSubject,
      homeworkDesc,
      classId
    }, { headers: authHeader() })

};

const getTotalHomeWorkCount = () => {
  return Axios.get(`${URL}/api/HomeWork/GetTotalHomeWorkCount`, { headers: authHeader() })
};
const getClassList = () => {
  return Axios.get(`${URL}/api/Class/ClassList`, { headers: authHeader() })
};
export default { addHomeWork, getHomeWorkList, getClassList, getHomeWorkListWithClass,getTotalHomeWorkCount,getLastAdded5HomeWorks };