import './PasswordChangeEditor.scss'
import './SettingsCommon.scss'
import SettingTextLabel from "./components/SettingTextLabel";
import LongButton from "../LongButton";
import {useState} from "react";

const PasswordChangeEditor = () => {
    const [inputs, setInputs] = useState({
        newPass: "",
        newPassCheck: "",
        currentPass: ""
    });

    const {newPass, newPassCheck, currentPass} = inputs;
    const onInputHandler = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const isSame = newPass === newPassCheck;

    return (
        <div className="editor">
            <SettingTextLabel text="새 비밀번호" />
            <div className="input_container input_password">
                <input
                    className="input_box"
                    name="newPass"
                    placeholder="새 비밀번호"
                    type="password"
                    onChange={onInputHandler}
                    value={newPass}
                />
            </div>
            <div className="input_container">
                <input
                    className="input_box"
                    name="newPassCheck"
                    placeholder="새 비밀번호 확인"
                    type="password"
                    onChange={onInputHandler}
                    value={newPassCheck}
                />
            </div>
            <SettingTextLabel text="현재 비밀번호" />
            <div className="input_container">
                <input
                    className="input_box"
                    name="currentPass"
                    placeholder="현재 비밀번호"
                    type="password"
                    onChange={onInputHandler}
                    value={currentPass}
                />
            </div>
            <div className="btn">
                <LongButton text="비밀번호 변경" type="positive" />
            </div>
        </div>
    );
};

export default PasswordChangeEditor;