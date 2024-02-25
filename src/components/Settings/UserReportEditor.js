import './UserReporEditor.scss';
import './SettingsCommon.scss';
import SettingTextLabel from "./components/SettingTextLabel";
import LongButton from "../LongButton";
import {useRef, useState} from "react";
const UserReportEditor = () => {
    const userId = "jerry";
    const fileUpload = useRef();
    const [fileUrl, setFileUrl]=useState("파일을 업로드하세요");

    const handleUploadClick = (e) => {
        fileUpload.current.click();
    };
    const handleUpload = (e) => {
        if (e.currentTarget.files?.[0]) {
            const fileName = fileUpload.current.value;
            const name= fileName.split('\\');
            setFileUrl(name[name.length-1]);
        }
    };

    return (
        <div className="editor" style={{
            paddingTop:"16px",
        }}>
            <SettingTextLabel text="신고 대상 별명" />
            <SettingTextLabel text="신고 이유" />
            <SettingTextLabel text="파일 첨부" />
            <div className="btn_label">
                <img src={require('../../img/Settings/upload_btn.png')} alt="picUploadBtn" className="picUpload_btn" onClick={handleUploadClick}/>
                <div className="file_url">{fileUrl}</div>
                <input type="file" value="" ref={fileUpload} onChange={handleUpload} style={{ display: "none" }} />
            </div>

            <SettingTextLabel text="일기장 비활성화 선택" />
            {/*<ToggleBtn />*/}
            <SettingTextLabel text="이용자 아이디"/>
            <div className="input_container">
                <input className="input_box" type="text" value={userId} disabled="true" style={{backgroundColor: "#D3D3D3"}}/>
            </div>
            <div className="btn">
                <LongButton text="유저 신고하기" type="positive"/>
            </div>
        </div>
    );
};

export default UserReportEditor;