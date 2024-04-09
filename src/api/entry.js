import {axiosInstance} from "./diary";

// 다이어리 개별 일기 내용 요청
export const getDiaryPage = async(diaryID) => {
    try {
        const response = await axiosInstance.get(`/entries/list/${diaryID}`);
        console.log('데이터 받기 완료');
        return response.data
    } catch(e) {
        alert("일기장 조회 실패");
    }
}

// 새 일기 작성
export const postDiary = async (content) => {
    try {
        const response = await axiosInstance.post('/entries/', content);
        console.log(response.data);
    } catch(error) {
        console.log('error');
    }
};

// 일기 수정
export const putDiary = async (content, entryID) => {
    try {
        await axiosInstance.put(`/entries/${entryID}`, content)
    }catch(error) {
        console.log('error');
    }
};


// 일기 전달
export const sendDiaryPage = async (entryID, setSendDiary) => {
    try {
        const response = await axiosInstance.patch(`/entries/${entryID}`);
        if (response.result === "일기 전달 성공") {
            setSendDiary(true);
        }
    }catch(error){
        console.log(error);
    }
}