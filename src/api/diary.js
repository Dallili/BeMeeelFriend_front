import axios from "axios";
const userToken = sessionStorage.getItem("userToken");

export let axiosInstance;
axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    defaults: {
        withCredentials: true,
        headers: {
            common: {
                Authorization: `Bearer ${userToken}`,
            }
        },
    }
});

// 일기 생성
export const createDiary = async (data) => {
    try {
        const response = await axiosInstance.post(`/matches/`, data);
        return response.data
    } catch (error) {
        alert("일기장 생성 실패");
        return "fail"
    }
}

export const deleteDiary = async (diaryID) => {
    try {
        await axiosInstance.delete(`/diaries/${diaryID}`);
        alert("일기장 삭제 완료");
    } catch(error) {
        console.log(error);
    }
}

export const deactivateDiary = async (diaryID) => {
    try{
        await axiosInstance.patch(`/diaries/${diaryID}/state`);
        alert("일기장 비활성화 완료");
    } catch (e) {
        console.log(e);
    }
}


// 일기장 조회
// 메인 페이지 일기장 조회
export const getDiary = async (userID) => {
    try {
        const response = await axiosInstance.get(`/diaries/replied`, {
            params: {
                loginMemberID: userID
            }
        })
        return response.data
    } catch (e) {
        alert("일기장 불러오기 오류");
    }
}

export const getDeactivated = async (userID) => {
    try {
        const response = await axiosInstance.get(`/diaries`,{
            params:{
                status: false,
                memberID: userID
            }
        })
        return response.data
    } catch(error) {
        console.log(error);
    }
};

export const getActivated = async (userID) => {
    try {
        const response = await axiosInstance.get(`/diaries`, {
            params: {
                status: true,
                memberID: userID
            }
        })
        console.log(response);
        return response.data
    } catch (error){
        console.log(error);
    }
}