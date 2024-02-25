import Header from "../../components/Header";
import AnnouncementList from "../../components/Settings/AnnouncementList";
import {Outlet} from "react-router-dom";

const AnnouncementPage = () => {
    return (
        <div className="announcement">
            <Header type="back" text="공지사항"/>
            <Outlet />
        </div>

    );
};

export default AnnouncementPage;