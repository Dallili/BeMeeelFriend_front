import {useRecoilValue} from "recoil";
import {notifyArrivalState, notifyState} from "../../recoil/atoms/notifyState";
import {useEffect, useState} from "react";
import './NotifyModal.scss';

const NotifyModal = ({onClick}) => {
    const notifyList = useRecoilValue(notifyState);
    const notifyArrival = useRecoilValue(notifyArrivalState);

    const [notify, setNotify] = useState("");

    function makeNotify(senderNickname, notifyType) {
        let title = '';
        const name =`${senderNickname}님`;

        switch (notifyType) {
            case "NEWDIARY":
                title = '과의 일기장이 만들어졌어요.';
                break;
            case "REPLY":
                title = '이 보낸 일기가 도착했어요.';
                break;
            case "INACTIVATE":
                title = '과의 일기장이 비활성화됐어요.';
                break;
            default:
                title = ``;
                break;
        }
        return `${name}${title}`
    }

    useEffect(() => {
        if (notifyArrival === true) {
            const notify = makeNotify(notifyList[notifyList.length -1].senderNickname, notifyList[notifyList.length -1].notifyType);
            setNotify(notify);
        }
    }, [notifyArrival]);

    const replaceMain = () => {
        window.location.replace('/');
    };

    return (
        <>
        { notifyList[notifyList.length -1].notifyType === "REPLY" ?
                <div className="notify_modal">
                    <div className="cancel_btn" onClick={replaceMain}>
                        <img src={require('../../img/cancel_btn.png')} alt="btn" />
                    </div>
                    <div className="notify_content" onClick={replaceMain}>
                        <div className="notify_title">✉️ 새로운 알림 도착</div>
                        <div className="notify_text">
                            {notify}
                        </div>
                    </div>
                </div>
                :
                <div className="notify_modal">
                    <div className="cancel_btn" onClick={onClick}>
                        <img src={require('../../img/cancel_btn.png')} alt="btn" />
                    </div>
                    <div className="notify_content">
                        <div className="notify_title">✉️ 새로운 알림 도착</div>
                        <div className="notify_text">
                            {notify}
                        </div>
                    </div>
                </div>
        }
        </>
    );
};

export default NotifyModal;