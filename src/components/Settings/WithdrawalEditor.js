import LongButton from "../LongButton";
import SettingTextLabel from "./components/SettingTextLabel";
import './SettingsCommon.scss'
import './WithdrawalEditor.scss'
import {useState} from "react";

const WithdrawalEditor = () => {
    const [password, setPassword] = useState();
    const onInputHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="editor" style={{paddingTop: "90px"}}>
            <div className="withdrawal_explain">
                탈퇴 시 모든 정보는 <span>즉시 삭제</span>되며
            </div>
            <div className="withdrawal_explain" style={{marginBottom: "15px"}}>
                일기장을 비롯한 계정 복구는 <span>불가</span>합니다.
            </div>
            <SettingTextLabel text="비밀 번호 입력" />
            <div className="input_container">
                <input
                    className="input_box"
                    type="password"
                    placeholder="현재 비밀번호를 입력해주세요."
                    onChange={onInputHandler}
                />
            </div>
            <div className="Btn">
                <div className="final_label">정말 탈퇴하시겠습니까?</div>
                <div className="btn" style={{marginTop: "10px"}}>
                    <LongButton text="탈퇴하기" type="negative" />
                </div>
            </div>
        </div>
    );
};

export default WithdrawalEditor;