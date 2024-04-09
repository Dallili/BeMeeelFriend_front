import {axiosInstance} from "./diary";

export const signUp = async (data) => {
    const user = data.email
    try {
        await axiosInstance.post('/members', data);
        sessionStorage.setItem("userID", user);
        window.location.replace('/');
    } catch(e) {
        alert("회원가입 오류 발생");
    }
}

export const login = async (data) => {
    const user = data.email
    try {
        const response = await axiosInstance.post('/members/login', data);
        const token = response.data.token;
        // 토큰 저장
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userID", user);
        window.location.replace("/");
    } catch(e) {
        alert("로그인 오류 발생");
    }
}

export const logOut = async (token) => {
    try {
        await axiosInstance.post('/members/logout');
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("userID");
        window.location.replace("/login");
    } catch (e) {
        alert("로그아웃 실패");
    }
}

export const getUserInfo = async (memberID) => {
    try {
        const res = await axiosInstance.get(`/members/${memberID}`);
        return res.data
    } catch (e){
        alert("유저 정보 조회 실패");
    }
}