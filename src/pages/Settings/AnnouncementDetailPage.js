import Header from "../../components/Header";
import AnnouncementContent from "../../components/Settings/AnnouncementContent";

const AnnouncementDetailPage = () => {
    return (
        <div className="announcementDetail">
            <Header type="cancel" text="공지사항" />
            <AnnouncementContent title="비밀친구의 n가지 규칙입니다"/>
        </div>
    );
};

export default AnnouncementDetailPage;