import './SettingsCommon.scss'
import AnnouncementItem from "./components/AnnouncementItem";
import {useNavigate} from "react-router-dom";

const AnnouncementList = () => {
    const date1 = new Date();
    const announcement = [
        {
            id: 1,
            type: "fixed",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 공지공지공지",
        }, {
            id: 2,
            type: "",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 공지지공지",
        },
        {
            id: 3,
            type: "",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 공지공지공지",
        },
        {
            id: 4,
            type: "",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 ",
        }, {
            id: 5,
            type: "",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 공지공지공지",
        },
        {
            id: 6,
            type: "",
            title: "비밀친구의 n가지 규칙입니다",
            date: date1,
            text: "이것은 공지공지공지",
        },
    ];
    const navigate = useNavigate();
    const goAnnouncementContent = () => navigate(`/settings/announcement/${announcement.id}`);

    return (
        <div className="editor">
            {announcement.map((it) => (
                <AnnouncementItem
                    key={it.id}
                    {...it}
                    onClick={goAnnouncementContent}
                />
            ))}
        </div>
    );
};

export default AnnouncementList;