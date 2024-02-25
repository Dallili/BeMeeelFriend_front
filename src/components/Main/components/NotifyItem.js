import './NotifyItem.scss';
import {useState} from "react";

const NotifyItem = ({type, user, date, color}) => {
    let title = '';
    const name =`${user}님`;

    const [isNone, setIsNone] = useState(false);

    switch (type) {
        case 1:
            title = '이 보낸 일기가 도착했어요.';
            break;
        case 2:
            title = '께 일기를 전달해요.';
            break;
        case 3:
            title = '과 일기장이 생성되었어요!';
            break;
        case 4:
            title = '이 나와의 일기장을 비활성화했어요.';
            break;
        case 5:
            title = ', 신고가 들어왔어요.';
            break;
        case 6:
            // setIsNone(true);
            break;
        default:
            title = ``;
            break;
    }

    const notifyDate = date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const [isClicked, setIsClicked] = useState("not_clicked");
    const clicked = () => {
        setIsClicked("clicked");
    }

    return (
        <div className={isClicked} onClick={clicked}>
            {/*<div className={["color_circle", `colorCircle_${isNone}`].join(" ")} style={{*/}
            {/*    backgroundColor: `${color}`,*/}
            {/*}}></div>*/}
            <div className="color_circle" style={{
                backgroundColor: `${color}`
            }}/>
            <div className="notify_content">
                <div className="notify_title">{[name, title].join("")}</div>
                <div className="notify_text"></div>
                <div className="notify_date">{notifyDate}</div>
            </div>
        </div>
    );
};

export default NotifyItem;