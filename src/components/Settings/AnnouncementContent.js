import './AnnouncementContent.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDetailAnnouncement} from "../../api/settings";

const AnnouncementContent = () => {
    const {noticeID} = useParams();
    const [detail, setDetail] = useState({
        title: "",
        createdAt: "",
        constructor: ""
    });
    const detailAnnouncement = async () => {
        const res = await getDetailAnnouncement(noticeID);
        setDetail(res);
    }
    useEffect(() => {
        detailAnnouncement();
    }, []);

    return(
        <>
        <div className="announcement_content">
            <div className="announcement_title">{detail.title}</div>
            <div className="announcement_date">{detail.createdAt}</div>
            <div className="announcement_text">{detail.content}</div>
        </div>
        </>
    )
}

export default AnnouncementContent;