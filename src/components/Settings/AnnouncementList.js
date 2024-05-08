import './SettingsCommon.scss'
import AnnouncementItem from "./components/AnnouncementItem";
import {useNavigate, useOutletContext} from "react-router-dom";

const AnnouncementList = () => {
    const { list } = useOutletContext();

    const navigate = useNavigate();

    return (
        <div className="editor">
            {list && list.map((it, index) => (
                <AnnouncementItem
                    key={it.id}
                    {...it}
                    onClick={() => navigate(`/settings/announcement/${list[index].noticeID}`)}
                />
            ))}
            { !list &&
            <div style={{textAlign:"center", marginTop:"50px"}}>
                공지사항이 없습니다.
            </div>
            }
        </div>
    );
};

export default AnnouncementList;