import { EventSourcePolyfill } from 'event-source-polyfill';

export const fetchSSE = async () => {
    const eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_SERVER_URL}/notify/subscribe`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
        },
        heartbeatTimeout: 30000
    });

    eventSource.onopen = () => {
        console.log("연결 성공");
        window.location.replace("/");
    };

    eventSource.addEventListener('message', (e) => {
        console.log(e.data)
    });
    eventSource.onmessage = async (e) => {
        const res = await e.data;
        const data = e.data.message !== undefined ? JSON.parse(e.data.message) : undefined;
        console.log(res);
        console.log(data);
        console.log(res.message);
        return res
    };

    eventSource.onerror = async (e) => {
        if (e.error.message === "network error") {
            console.log(e.error);
            console.log(eventSource.readyState);
        }
        return false
    }
};