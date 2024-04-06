import './SandwichMenu.scss';
import MenuItem from "./components/MenuItem";
import Modal from "../Modal";
import useModal from "../../hooks/useModal";
import {useNavigate} from "react-router-dom";

const SandwichMenu = ({menuClose}) => {
    // 사용자 정보 받아와서 넘겨주기
    const name = "반짝이는 마녀";
    const num = 0;
    const navigate = useNavigate();

    const goCreateDiary = () => navigate('/newdiary');
    const goSettings = () => navigate('/settings');
    const goNotify = () => navigate('/notify');


    const {isOpen, open, close} = useModal();

    const logout= () => {
        console.log("로그아웃 성공");
        close();
    };

    const goDeactivated = () => navigate('/deactivated-diary');

    return (
        <>
            <div className="overlay" onClick={menuClose}></div>
            <div className="sandwich_menu">
                <div className="sandwichClose_btn">
                    <img onClick={menuClose} src={require('../../img/back_btn.png')} alt="cancelBtn" className="modalCancel_btn" />
                </div>
                <div className="sandwich_profile">
                    <div className="pic_circle">
                        <img src={require('../../img/user_pic.png')} alt="profilePic" className="profile_pic" />
                    </div>
                    <div className="profile_text">
                        <div className="user_name">{name}</div>
                        <div className="diary_count">현재 만든 일기장 {num}/3</div>
                    </div>
                </div>
                <div className="menu_list">
                    <div className="menuList_line">
                        <label>DIARY</label>
                        <div className="line"></div>
                    </div>
                    <MenuItem title="일기장 생성" item="addDiary_btn" onClick={goCreateDiary}/>
                    {/*<MenuItem title="일기장 비활성화" item="deactivate_btn" on/>*/}
                    <MenuItem title="비활성화된 일기장 읽기" item="deactivateRead_btn" onClick={goDeactivated}/>
                </div>
                <div className="menu_list">
                    <div className="menuList_line">
                        <label>SETTING</label>
                        <div className="line"></div>
                    </div>
                    <MenuItem title="알림" item="notify_btn" onClick={goNotify} />
                    <MenuItem title="설정" item="settings_btn" onClick={goSettings} />
                    <MenuItem title="로그아웃" item="logout_btn" onClick={open} />
                    {isOpen && (
                        <Modal
                            message="정말 로그아웃 하시겠습니까?"
                            close={close}
                            btnText="로그아웃 하기"
                            confirm={logout}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default SandwichMenu;