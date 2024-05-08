import './AnnouncementItem.scss';

const AnnouncementItem = ({title, createdAt, pinned, onClick}) => {

    return (
        pinned === true ? (
            <div className="announcement_item" onClick={onClick}>
                <div className="title_pin">
                    <div className="announcement_title">{title}</div>
                    <img src={require('../../../img/Settings/pushpin.png')} alt="pin" className="pin_img" />
                </div>
                <div className="announcement_date">{createdAt}</div>
            </div>
        ) : (
            <div className="announcement_item" onClick={onClick}>
                <div className="announcement_title">{title}</div>
                <div className="announcement_date">{createdAt}</div>
            </div>
        )
    );
};

export default AnnouncementItem;