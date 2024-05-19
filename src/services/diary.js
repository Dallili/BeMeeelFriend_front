import {axiosInstance} from "./user";

// 일기 생성
export const createDiary = async (data) => {
    try {
        const res = await axiosInstance.post(`/matches/`, data, {
            headers: {
                "Content-Type": `application/json`,
            }
        });
        return res.data
    } catch (error) {
        alert("일기장 생성 실패");
        return "fail"
    }
};

export const deleteDiary = async (diaryID) => {
    try {
        await axiosInstance.delete(`/diaries/${diaryID}`);
        window.location.replace('/');
    } catch(error) {
        console.log(error);
        return "fail"
    }
};

export const deactivateDiary = async (diaryID, data) => {
    try{
        await axiosInstance.patch(`/diaries/${diaryID}/state`);
        window.location.replace('/');
    } catch (e) {
        console.log(e);
        return "fail"
    }
};


// 일기장 조회
// 메인 페이지 일기장 조회
export const getDiary = async () => {
    try {
        const res = await axiosInstance.get(`/diaries/replied`);
        return res.data
    } catch (e) {
        return "fail"
    }
};

// 히스토리 캐비닛 일기 조회, 총 일기 개수 조회
export const getActivated = async () => {
    try {
        const response = await axiosInstance.get(`/diaries/`, {
            params: {
                state: true
            }
        })
        return response.data
    } catch (error){
        return "fail"
    }
};

// 비활성화 일기장 조회
export const getDeactivated = async (userID) => {
    try {
        const response = await axiosInstance.get(`/diaries/`,{
            params:{
                state: false
            }
        })
        return response.data
    } catch(error) {
        return "fail"
    }
};

export const ReturnDiary = async (diaryID) => {
    try {
        const response = await axiosInstance.patch(`/diaries/${diaryID}/takeBack`);
        return true
    } catch (error) {
        return error.response.data.message
    }
}
