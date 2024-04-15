import {axiosInstance} from "./user";

// 일기 생성
export const createDiary = async (data) => {
    try {
        const res = await axiosInstance.post(`/matches/`, JSON.stringify(data), {
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
        alert("일기장 삭제 완료");
    } catch(error) {
        console.log(error);
    }
};

export const deactivateDiary = async (diaryID) => {
    try{
        await axiosInstance.patch(`/diaries/${diaryID}/state`);
        alert("일기장 비활성화 완료");
    } catch (e) {
        console.log(e);
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
