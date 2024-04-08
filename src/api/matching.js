import {axiosInstance} from "./diary";

export const getMatchingCode = (diaryID) => {
    axiosInstance.get(`/matches/${diaryID}`)
        .then((response)=>{
            return response.data
        })
        .catch((e) => {
            console.log(e);
        })
}