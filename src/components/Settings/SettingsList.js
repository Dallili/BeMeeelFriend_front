import SettingsItem from "./components/SettingsItem";
import './SettingsList.scss'
import {useNavigate} from "react-router-dom";
import Modal from "../Modal";
import useModal from "../../hooks/useModal";
import {useState} from "react";
import {logOut} from "../../api/user";
import {patchFiltering} from "../../api/settings";

const SettingsList = ({userId, filtering, setFiltering}) => {
    const navigate = useNavigate();
    const goEditProfile = () => navigate('/settings/editprofile');
    const goChangePassword = () => navigate('/settings/changepassword');
    const goAnnouncement = () => navigate('/settings/announcement');
    const goInquiry = () => navigate('/settings/inquiry');
    const goGuide = () => navigate('/settings/guide');
    const goUserReport = () => navigate('/settings/userreport');
    const goWithdrawal = () => navigate('/settings/withdrawal');

    const {isOpen, open, close} = useModal();

    const logout= () => {
        logOut();
    };


    const handleToggle = async () => {
        setFiltering((prev) => !prev);
        await patchFiltering({
            "useFiltering": !filtering
        });
    };


    return (
        <div className="settings_list">
            <div className="category_label">사용자 설정</div>
            <div className="buttons">
                <div className="id">
                    <SettingsItem type="disabled" itemName="닉네임"/>
                    <div className="user_id">{userId}</div>
                </div>
                <SettingsItem type="false" itemName="프로필 수정" onClick={goEditProfile}/>
                <SettingsItem type="false" itemName="비밀번호 변경" onClick={goChangePassword}/>
                <div className="filtering">
                    <SettingsItem type="disabled" itemName={"혐오 발언 필터링"}/>
                    <label className="switch" htmlFor="toggle">
                        <input type="checkbox" id="toggle" onChange={handleToggle} checked={filtering}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="border_line"></div>
            <div className="category_label">이용 안내</div>
            <div className="buttons">
                <SettingsItem type="false" itemName="공지사항" onClick={goAnnouncement}/>
                <SettingsItem type="false" itemName="문의하기" onClick={goInquiry}/>
                <SettingsItem type="false" itemName="이용 방법 안내" onClick={goGuide}/>
                <SettingsItem type="false" itemName="유저 신고" onClick={goUserReport}/>
            </div>
            <div className="border_line"></div>
            <div className="category_label">기타</div>
            <div className="buttons">
                <SettingsItem type="false" itemName="로그아웃" onClick={open}/>
                {isOpen && (
                    <Modal
                        message="정말 로그아웃 하시겠습니까?"
                        close={close}
                        btnText="로그아웃 하기"
                        confirm={logout}
                    />
                )}
                <SettingsItem type="false" itemName="회원 탈퇴" onClick={goWithdrawal}/>
            </div>
        </div>
    )
}

export default SettingsList;