import {axiosInstance} from "./user";

// 다이어리 개별 일기 내용 요청
export const getDiaryPage = async(diaryID) => {
    try {
        const res = await axiosInstance.get(`/entries/list/${diaryID}`);
        return res.data
    } catch(e) {
        alert("일기장 조회 실패");
        return "fail"
    }
}

// 새 일기 작성
export const postDiary = async (content) => {
    try {
        const res = await axiosInstance.post('/entries/', content);
        return res.data
    } catch(error) {
        return "fail"
    }
};

// 일기 수정
export const putDiary = async (content, entryID) => {
    try {
        const res = await axiosInstance.put(`/entries/${entryID}`, content);
        return res.data
    }catch(error) {
        return "fail"
    }
};


// 일기 전달
export const sendDiaryPage = async (entryID) => {
    try {
        const res = await axiosInstance.patch(`/entries/${entryID}`);
        return res.data
    }catch(error){
        return "fail"
    }
}