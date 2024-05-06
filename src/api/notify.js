import { EventSourcePolyfill } from 'event-source-polyfill';

export const fetchSSE = async () => {
    const eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_SERVER_URL}/notify/subscribe`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
        },
        heartbeatTimeout: 3*3600*1000
    });

    eventSource.onopen = () => {
      console.log("연결 성공");
    };

    eventSource.onmessage = async (e) => {
        const res = await e.data;
        const data = e.data.message !== undefined ? JSON.parse(e.data.message) : undefined;
        console.log(res);
        console.log(data);
        console.log(res.message);
        return res
    };

    eventSource.onerror = (e) => {
        if (e.error) {
            console.log("error");
            eventSource.close();
        }
    }
};