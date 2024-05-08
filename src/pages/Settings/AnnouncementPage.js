import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAnnouncement} from "../../api/settings";

const AnnouncementPage = () => {
    const [list, setList] = useState([]);
    const announcement = async () => {
        const res = await getAnnouncement();
        const pinnedList = res.pinList.map((it) => {
            return {
                ...it,
                "pinned": true
            }
        })
        const unpinnedList = res.unpinList.map((it) => {
            return {
                ...it,
                "pinned": false
            }
        })
        if (pinnedList || unpinnedList) {
            setList([...pinnedList, ...unpinnedList]);
        }
        console.log(pinnedList, unpinnedList)
        console.log(list)
    };

    useEffect(() => {
        announcement();
    }, []);


    return (
        <div className="announcement">
            <Header type="back" text="공지사항"/>
            <Outlet context={{list}} />
        </div>
    );
};

export default AnnouncementPage;