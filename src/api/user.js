import axios from "axios";
const userToken = sessionStorage.getItem("userToken");

export let axiosInstance;
axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers.common.Authorization = `Bearer ${userToken}`;
axiosInstance.defaults.baseURL = process.env.REACT_APP_SERVER_URL;


export const signUp = async (data) => {
    try {
        const res = await axiosInstance.post(`/members/signup`, data);
        if (res.data.message === "이미 존재하는 이메일입니다") {
            alert("이미 존재하는 이메일입니다");
        } else {
            // 회원가입 후 로그인
            await login({
                email: data.email,
                password: data.password
            });
        }
        return true;
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
        return token;
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
    } catch (e) {
        alert("유저 정보 조회 실패");
    }
}

export const patchPassword = async (data) => {
    try {
        const res = await axiosInstance.patch(`/members/pw`, data);
        return true
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const patchMemberInfo = async (data) => {
    try {
        const res = await axiosInstance.patch(`/members`, data);
        return true
    } catch (e) {
        alert("회원 정보 수정 오류");
    }
}

export const sendVerificationCode = async (data) => {
    try{
        const res = await axiosInstance.post('/members/signup/email', {
            "email": data
        });
        return true
    } catch (e) {
        console.log(e);
    }
}

export const certificateCode = async (data) => {
    try {
        const res = await axiosInstance.post('/members/signup/email/verification', {
            "code": data
        });
        // if (res.status === 421 || res.response.data.status === 420){
        //     console.log(res.response.data.message)
        //     return res.response.message
        // } else {
        //     return true
        // }
        return true
    } catch (e) {
        console.log(e.response.data.message)
        console.log(e);
    }
}