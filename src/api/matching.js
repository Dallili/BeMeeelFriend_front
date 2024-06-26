import {axiosInstance} from "./user";

// 매칭 코드 조회
export const getMatchingCode = async (diaryID) => {
    try {
        const response = await axiosInstance.get(`/matches/{diaryID}`, {
            params: {
                diaryID: diaryID
            }
        });
        const matchingCode = response.data;
        return matchingCode
    } catch (e) {
        alert("매칭 코드 받기 실패");
        return "fail"
    }
}

export const patchMatchingCode = async (data) => {
    try {
        const res = await axiosInstance.patch(`/matches/?code=${data}`);
        if (res.data.state === "이미 매칭이 완료된 일기장입니다") {
            return res.data.state
        } else {
            return "success"
        }
    } catch (e) {
        return "코드 전송 실패"
    }
}

// 랜덤 매칭 요청
export const postRandomMatching = async (data) => {
    try {
        const res = await axiosInstance.post('/matches/unknown', data);
        return res.data
    } catch (e) {
        alert(e);
        return "fail"
    }
}

export const deleteMatching = async (matchingID) => {
    try {
        const res = await axiosInstance.delete(`/matches/${matchingID}`);
        return true
    } catch (e) {
        console.log('매칭 취소 실패');
    }
}

