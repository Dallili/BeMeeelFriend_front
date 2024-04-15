import {axiosInstance} from "./diary";

// 다이어리 개별 일기 내용 요청
export const getDiaryPage = async(diaryID) => {
    try {
        const response = await axiosInstance.get(`/entries/list/${diaryID}`);
        console.log('데이터 받기 완료');
        return response.data
    } catch(e) {
        alert("일기장 조회 실패");
        return "fail"
    }
}

// 새 일기 작성
export const postDiary = async (content) => {
    try {
        const response = await axiosInstance.post('/entries/', content);
    } catch(error) {
        return "fail"
    }
};

// 일기 수정
export const putDiary = async (content, entryID) => {
    try {
        await axiosInstance.put(`/entries/${entryID}`, content)
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