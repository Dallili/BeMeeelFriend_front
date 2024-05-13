import { EventSourcePolyfill } from 'event-source-polyfill';
import {axiosInstance} from "./user";

export const fetchSSE = async (setNotify) => {
    const eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_SERVER_URL}/emitter/subscribe`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
            withCredentials: true
        },
        heartbeatTimeout: 86400000
    });

    eventSource.onopen = () => {
        console.log("연결 성공");
    };

    eventSource.onmessage = async (e) => {
        let res = await e.data;
        if (res !== "success") {
            res = JSON.parse(res);
            setNotify({
                notifyType: res.type,
                senderNickname: res.opponent,
                diaryColor: res.color,
                updatedAt: res.timestamp
            });
        }
    };

    eventSource.onerror = async (e) => {
        if (e.error === "network error") {
            console.log(e.error);
        }
        return false
    }
};

export const getNotifyList = async () => {
    try {
        const res = await axiosInstance.get(`/notify/`);
        return res.data
    } catch (e) {
        alert("유저 정보 조회 실패");
    }
}
