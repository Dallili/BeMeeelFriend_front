import './NotifyList.scss';
import NotifyItem from "./components/NotifyItem";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {notifyState} from "../../recoil/atoms/notifyState";
import {getNotifyList} from "../../api/notify";
import {useEffect} from "react";

const NotifyList = () => {
    const setNotify = useSetRecoilState(notifyState);
    const notifyList = useRecoilValue(notifyState);

    const getNotify = async () => {
        const res = await getNotifyList();
        setNotify(res);
    }

    useEffect(() => {
        getNotify();
    }, []);

    return (
        <div className="notify_list">
            { notifyList.length === 0 ?
                <div className="noNotify_text">아직 도착한 알림이 없습니다.</div>
                :
                notifyList.slice(0).reverse().map((it, index) => (
                        <NotifyItem
                            key={index}
                            {...it}
                        />
                ))
            }
        </div>
    );
};

export default NotifyList;