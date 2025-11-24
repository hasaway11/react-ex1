import axios from "axios";

// 쿠키 기반 인증이고 CORS 요청이면 → 반드시 필요(CORS 환경에서는 자동 전송이 보안상 차단됨)
// 같은 도메인 - 필요없음
// 토큰 인증이면 → 필요 없음

// const api = axios.create({baseURL: "https://contactsvc.bmaster.kro.kr/contacts", withCredentials: true });
const api = axios.create({baseURL: "https://contactsvc.bmaster.kro.kr/contacts" });

export default api;