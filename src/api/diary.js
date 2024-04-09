import axios from "axios";
const API_URL = process.env["REACT_APP_API_URL"];
// const token = process.env["REACT_APP_TOKEN"];
const userToken ='eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJRCI6MSwiZW1haWwiOiJtaW5qaUB0ZXN0LmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzEyNjYwMDA0LCJleHAiOjE4MjA2NjAwMDR9.WWX04VSLeVxpgNVqXo6N4nV4CzGQMo4sqUOpBXmAaqI'
// const userToken = sessionStorage.getItem("userToken");

export let axiosInstance;
axiosInstance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        Authorization: `Bearer ${userToken}`,
        'Access-Control-Allow-credentials': true
    }
});

// 일기 생성
export const createDiary = async(data) => {
    try {
        const response = await axiosInstance.post('/', data);
        return response.data
    } catch (error) {
        alert("일기장 생성 실패");
        return "fail"
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


// 일기장 조회
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