import axios from "axios";

export const getMatchingCode = (diaryID) => {
    axios.get(`/matches/${diaryID}`)
        .then((response)=>{
            return response
        })
        .catch()
}