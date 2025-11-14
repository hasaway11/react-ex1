import axios from "axios";

const rest = axios.create({baseURL:'https://contactsvc.bmaster.kro.kr/contacts'});

export const readAll = (pageno=1, pagesize=10)=>rest.get(`?pageno=${pageno}&pagesize=${pagesize}`).then(res=>res.data);

export const read = (no)=>rest.get(`/${no}`).then(res=>res.data);

export const create = (params)=>rest.post('', new URLSearchParams(params));

export const update = (params)=>rest.post('/${no}', new URLSearchParams(params));

export const remove = (no)=>rest.post(`/${no}`);

export const uploadProfile = (no, formData)=>rest.post(`/${no}`, formData);

