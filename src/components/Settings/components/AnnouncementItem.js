import './AnnouncementItem.scss';

const AnnouncementItem = ({title, date, type, onClick}) => {
    const date1 = date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        type === "fixed" ? (
            <div className="announcement_item" onClick={onClick}>
                <div className="title_pin">
                    <div className="announcement_title">{title}</div>
                    <img src={require('../../../img/Settings/pushpin.png')} alt="pin" className="pin_img" />
                </div>
                <div className="announcement_date">{date1}</div>
            </div>
        ) : (
            <div className="announcement_item" onClick={onClick}>
                <div className="announcement_title">{title}</div>
                <div className="announcement_date">{date1}</div>
            </div>
        )
    );
};

export default AnnouncementItem;