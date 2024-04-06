import axios from "axios";
import {useEffect} from "react";

export const axiosInstance = axios.create({
    baseURL: 'http://ec2-3-17-227-166.us-east-2.compute.amazonaws.com',
    withCredentials: true,
});

// 다이어리 개별 일기 내용 요청
export const getDiaryPage = async(diaryID) => {
    try {
        await axiosInstance.get(`/entries/list/${diaryID}`)
            .then((response) => {
                console.log('데이터 받기 완료');
                return response.data
            })
    } catch(e) {
        console.log(e);
    }
}

// 새 일기 작성
export const postDiary = async (content) => {
    try {
        await axiosInstance.post('/entries/', content)
            .then((response) => {
                console.log(response.data)
            })
    }catch(error) {
            console.log('error');
    }
};

// 일기 수정
export const putDiary = async (content, entryID) => {
    try {
        await axiosInstance.put(`/entries/${entryID}`, content)
            .then((response) => {

            })
    }catch(error) {
        console.log('error');
    }
};


// 메인 페이지 일기장 조회
export const getDiary = async(userID) => {
    try {
        await axiosInstance.get('/diaries/replied', {
            params: {
                loginUserID: userID
            }
        })
            .then((response) => {
                return response.data
            })
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
            .then()
    } catch(error) {
        console.log(error);
    }
};

export const getActivated = async(userID) => {
    try {
        await axiosInstance.get('/diaries', {
            params: {
                status: true,
                userID: userID
            }
        })
            .then((res)=>{
                console.log(res);
            })
    } catch (error){
        console.log(error);
    }
}

// 일기 전달
export const sendDiaryPage = async (entryID, setSendDiary) => {
    try {
        await axiosInstance.patch(`/entries/${entryID}`)
            .then((response) => {
                if (response.result === "일기 전달 성공") {
                    setSendDiary(true);
                }
            })
    }catch(error){
        console.log(error);
    }
}

export const deleteDiary = async(diaryID) => {
    try {
        await axiosInstance.delete(`/diaries/${diaryID}`)
            .then()
    } catch(error) {
        console.log(error);
    }
}

export const deactivateDiary = async(diaryID) => {
    try{
        await axiosInstance.patch(`/diaries/${diaryID}/isActivated`)
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

