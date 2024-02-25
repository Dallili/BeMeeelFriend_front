import Header from "../../components/Header";
import SettingsList from "../../components/Settings/SettingsList";
import {Routes} from "react-router-dom";
import {useState} from "react";


const SettingsMenuPage = ({userInformation}) => {
    // const [userInfo, setUserInfo] = useState(userInformation);
    // const userId = userInfo.id;
    // const filtering = userInfo.filter;

    return(
        <div className="settings">
            <Header type="back" text="설정"/>
            <SettingsList userId="dogcat" filtering="off"/>
        </div>
    )
}

export default SettingsMenuPage;