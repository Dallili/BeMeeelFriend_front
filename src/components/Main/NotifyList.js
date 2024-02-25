import './NotifyList.scss';
import NotifyItem from "./components/NotifyItem";

const NotifyList = () => {
    const type = {
        1: "diaryArrival",
        2: "diarySend",
        3: "newDiary",
        4: "deactivate",
        5: "userReport",
        6: "master",
    }

    const notify = [
        {
            type: 1,
            user: "엉뚱한 생쥐",
            date: new Date(),
            color: "#FFADD4",
        },
        {
            type: 2,
            user: "채린",
            date: new Date(),
            color: "#349C57",
        },
        {
            type: 6,
            user: "",
            date: new Date(),
            color: "",
        }
    ];

    return (
        <div className="notify_list">
            { !notify &&
                <div className="noNotify_text">아직 도착한 알림이 없습니다.</div>
            }
            {notify.map((it) => (
                    <NotifyItem
                        type={notify.type}
                        user={notify.user}
                        date={notify.date}
                        color={notify.color}
                        key={it.id}
                        {...it}
                    />
            ))}
        </div>
    );
};

export default NotifyList;