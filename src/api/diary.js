import axios from "axios";
const API_URL = process.env["REACT_APP_API_URL"];
const token = process.env["REACT_APP_TOKEN"];
const userToken = sessionStorage.getItem("userToken");

export let axiosInstance;
axiosInstance = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-credentials': "true"
    }
});

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


// 메인 페이지 일기장 조회
export const getDiary = async(userID) => {
    try {
        const response = await axiosInstance.get('/diaries/replied', {
            params: {
                loginUserID: userID
            }
        })
        return response.data
    } catch (e) {
        console.log(e);
    }
}

export const getDeactivated = async (userID) => {
    try {
        await axiosInstance.get('/diaries',{
            params:{
                status: false,
                userID: userID
            }
        })
    } catch(error) {
        console.log(error);
    }
};

export const getActivated = async(userID) => {
    try {
        const response = await axiosInstance.get('/diaries', {
            params: {
                status: true,
                userID: userID
            }
        })
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

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

export const deleteDiary = async(diaryID) => {
    try {
        await axiosInstance.delete(`/diaries/${diaryID}`);
    } catch(error) {
        console.log(error);
    }
}

export const deactivateDiary = async(diaryID) => {
    try{
        await axiosInstance.patch(`/diaries/${diaryID}/isActivated`);
    } catch (e) {
        console.log(e);
    }
}

export const createDiary = async(userID) => {
    try {
        await axiosInstance.post('/');
    } catch (error) {
        console.log("false");
        console.log(error);
        return "fail"
    }
}

