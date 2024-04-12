import {axiosInstance} from "./diary";

// 매칭 코드 조회
export const getMatchingCode = async (diaryID) => {
    try {
        const response = await axiosInstance.get(`/matches/${diaryID}`);
        const matchingCode = response.data;
        return matchingCode
    } catch (e) {
        alert("매칭 코드 받기 실패");
        return false
    }
}

export const patchMatchingCode = async (data) => {
    try {
        const res = await axiosInstance.patch('/matches', data);
        return true
    } catch (e) {
        alert("코드 전송 실패");
        return false
    }
}

// 랜덤 매칭 요청
export const postRandomMatching = async (data) => {
    try {
        const res = await axiosInstance.post('/matches/unknown', data);
        return res.data
    } catch (e) {
        alert("매칭 전송 실패");
        return false
    }
}

