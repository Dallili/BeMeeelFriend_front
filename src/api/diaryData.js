import {useEffect, useState} from "react";
import {getActivated, getDiary, postDiary, putDiary} from "./diary";
import {getDiaryPage} from "./entry";


export const getDiaryPageData = (diaryID) => {
    const response = getDiaryPage(diaryID);
    const sentData = response.sent;
    const unsentData = response.unsent;
    const diaryNum = response.total;
    return { sentData, unsentData }
};

export const getMainDiary = (userID) => {
    // const diaries =  getDiary(userID);
    const diaries = {
        "diaries": [
            {
                "diaryID": "diary8",
                "userID": "user8",
                "partnerID": "user10",
                "updatedBy": "user8",
                "updatedAt": "2024-03-26 15:52:15",
                "color": "#000000",
                "activated": true
            }
        ]
    }
    return diaries;
};

export const getDeactivatedDiary = () => {
    // const [response, setResponse] = useState(getDeactivated);
    const deactivatedDiaries = {
            "total": 1,
            "diaries": [
            {
                "diaryID": "diary10",
                "userID": "user10",
                "partnerID": "user12",
                "updatedBy": "new user",
                "updatedAt": "2024-03-26 21:18:33",
                "color": "#000000",
                "activated": false
            }
        ]
    }
    return deactivatedDiaries
}

export const getActivatedDiary = () => {
    // const [response, setResponse] = useState(getActivated());
    const activatedDiaries = {
            "total": 1,
            "diaries": [
            {
                "diaryID": "diary12",
                "userID": "user12",
                "partnerID": "user14",
                "updatedBy": "user12",
                "updatedAt": "2024-03-26 15:52:15",
                "color": "#000000",
                "activated": true
            }
        ]
    }
    return activatedDiaries.diaries
}
