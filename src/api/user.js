import {axiosInstance} from "./diary";
const API_URL = process.env["REACT_APP_API_URL"];

export const signUp = async (data) => {
    try {
        await axiosInstance.post(`${API_URL}/members`, data);
        const response = await axiosInstance.post(`${API_URL}/members/login`, {
            email: data.email,
            password: data.password
        });
        const token = response.data.token;
        const user = response.data.memberID;
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userID", user);
        window.location.replace("/welcome");
    } catch(e) {
        alert("회원가입 오류 발생");
    }
}

export const login = async (data) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/members/login`, data);
        const token = response.data;
        // const user = response.data.memberID;
        console.log(response.data)
        // 토큰 저장
        sessionStorage.setItem("userToken", token);
        // sessionStorage.setItem("userID", user);
        window.location.replace("/");
    } catch(e) {
        alert(e);
    }
}

export const logOut = async (token) => {
    try {
        await axiosInstance.post(`${API_URL}/members/logout`);
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userID");
        window.location.replace("/login");
    } catch (e) {
        alert("로그아웃 실패");
    }
}

export const getUserInfo = async () => {
    const memberID = sessionStorage.getItem("userID");
    try {
        const res = await axiosInstance.get(`${API_URL}/members/${memberID}`);
        return res.data
    } catch (e){
        alert("유저 정보 조회 실패");
    }
}