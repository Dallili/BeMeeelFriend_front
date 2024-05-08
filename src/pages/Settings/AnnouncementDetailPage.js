import Header from "../../components/Header";
import AnnouncementContent from "../../components/Settings/AnnouncementContent";

const AnnouncementDetailPage = () => {

    return (
        <div className="announcementDetail">
            <Header type="cancel" text="공지사항" />
            <AnnouncementContent />
        </div>
    );
};

export default AnnouncementDetailPage;