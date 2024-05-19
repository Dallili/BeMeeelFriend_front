import './NotifyItem.scss';
import {useState} from "react";

const NotifyItem = ({notifyType, receiverID, senderNickname, updatedAt, diaryColor}) => {
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


    // const [isClicked, setIsClicked] = useState("not_clicked");
    // const clicked = () => {
    //     setIsClicked("clicked");
    // }

    return (
        <div className="clicked">
            <div className="color_circle" style={{
                filter: diaryColor &&
                    `opacity(.7) drop-shadow(0 0 0 ${diaryColor.slice(1, -1)})`
            }}/>
            <div className="notify_content">
                <div className="notify_title">{[name, title].join("")}</div>
                <div className="notify_text"></div>
                <div className="notify_date">{updatedAt}</div>
            </div>
        </div>
    );
};

export default NotifyItem;