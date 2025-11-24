import axios from "axios";

// const api = axios.create({baseURL: "https://contactsvc.bmaster.kro.kr/contacts", withCredentials: true });
const api = axios.create({baseURL: "https://contactsvc.bmaster.kro.kr/contacts" });

export default api;