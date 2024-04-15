import axios from "axios";
const userToken = sessionStorage.getItem("userToken");

export let axiosInstance;
axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
axiosInstance.defaults.baseURL = process.env.REACT_APP_SERVER_URL;


export const signUp = async (data) => {
    try {
        const res = await axiosInstance.post(`/members`, data);
        if (res.data.message === "이미 존재하는 이메일입니다") {
            alert("이미 존재하는 이메일입니다");
        }
        // 회원가입 후 로그인
        const response = await login({
            email: data.email,
            password: data.password
        });
        const token = response.data.token;
        sessionStorage.setItem("userToken", token);
        window.location.replace("/welcome");
    } catch(e) {
        return "fail";
    }
}

export const login = async (data) => {
    try {
        const response = await axiosInstance.post(`/members/login`, data);
        const token = response.data;
        // 토큰 저장
        sessionStorage.setItem("userToken", token);
        window.location.replace("/");
    } catch(e) {
        return "fail";
    }
}

export const logOut = () => {
    try {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userID");
        window.location.replace("/login");
    } catch (e) {
        alert("로그아웃 실패");
    }
}

export const getUserInfo = async () => {
    try {
        const res = await axiosInstance.get(`/members`);
        return res.data
    } catch (e){
        alert("유저 정보 조회 실패");
    }
}