import {useEffect, useState} from "react";
import {getActivated, getDiary, getDiaryPage, postDiary, putDiary} from "./diary";


export const getDiaryPageData = (diaryID) => {
    const response = getDiaryPage(diaryID);
    // console.log(init)
    // const [response, setResponse] = useState();
    // const response = init;
    // const response =
    //     {
    //         "total": 2,
    //         "unsent": [
    //             {
    //                 "entryID": 13,
    //                 "writer": "user1",
    //                 "date": "2024-03-27 16:08:34",
    //                 "content": "일기 텍스트..."
    //             }
    //         ],
    //         "sent": [
    //             {
    //                 "entryID": 11,
    //                 "writer": "user1",
    //                 "sendAt": "2024-03-31 00:26:58",
    //                 "content": "수정된 일기"
    //             },
    //             {
    //                 "entryID": 12,
    //                 "writer": "user1",
    //                 "sendAt": "2024-03-31 00:27:22",
    //                 "content": "일기 텍스트..."
    //             }
    //         ]
    //     }
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
