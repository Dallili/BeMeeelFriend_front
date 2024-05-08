import Header from "../../components/Header";
import SettingsList from "../../components/Settings/SettingsList";
import {Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";

const SettingsMenuPage = () => {
    const [nickName, setNickname] = useState("");
    const [filtering, setFiltering] = useState();
    const getInfo = async () => {
        const res = await getUserInfo();
        setNickname(res.nickname);
        setFiltering(res.useFiltering);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return(
        <div className="settings">
            <Header type="back" text="설정"/>
            <SettingsList userId={nickName} filtering={filtering} setFiltering={setFiltering}/>
        </div>
    )
}

export default SettingsMenuPage;