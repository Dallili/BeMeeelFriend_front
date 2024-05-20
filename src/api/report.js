import {axiosInstance} from "./user";

export const getShortReport = async (entryID) => {
    try {
        const res = axiosInstance.get(`/${entryID}/reports`);
        return res
    } catch (e) {
        return "fail"
    }
}

export const getRecentFive = async (diaryID) => {
    try {
        const res = axiosInstance.get(`/${diaryID}/reports/list`);
        return res
    } catch (e) {
        return "fail"
    }
}

