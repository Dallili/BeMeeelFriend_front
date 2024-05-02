import Header from "../../components/Header";
import SettingsList from "../../components/Settings/SettingsList";
import {Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";

const SettingsMenuPage = () => {
    const [nickName, setNickname] = useState("");
    const getInfo = async () => {
        const res = await getUserInfo();
        setNickname(res.nickname);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return(
        <div className="settings">
            <Header type="back" text="설정"/>
            <SettingsList userId={nickName} filtering="off"/>
        </div>
    )
}

export default SettingsMenuPage;