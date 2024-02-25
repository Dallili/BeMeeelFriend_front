import './AnnouncementContent.scss'
import Header from "../Header";

const AnnouncementContent = ({title, date, text}) => {
    const date1 = new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return(
        <>
        <div className="announcement_content">
            <div className="announcement_title">{title}</div>
            <div className="announcement_date">{date1}</div>
            <div className="announcement_text">{text}</div>
        </div>
        </>
    )
}

export default AnnouncementContent;