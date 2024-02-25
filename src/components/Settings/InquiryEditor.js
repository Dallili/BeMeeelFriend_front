import SettingTextLabel from "./components/SettingTextLabel";
import LongButton from "../LongButton";
import './SettingsCommon.scss'
import TextareaAutosize from 'react-textarea-autosize';

const InquiryEditor = () => {
    return (
        <div className="editor">
            <SettingTextLabel text="내용"/>
            <div className="input_container">
                <TextareaAutosize
                    minRows={8}
                    maxRows={8}
                    maxLength={500}
                    style={{
                        resize: "none",
                        outline: "none",
                        overflow: "hidden",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor: "#F5F5F5",
                        width: "100%",
                        padding:"10px",
                        fontSize:"15px",
                    }}/>
            </div>
            <SettingTextLabel text="연락받을 이메일"/>
            <div className="input_container">
                <input className="input_box" type="email" />
            </div>
            <SettingTextLabel text="이용자 아이디"/>
            <div className="input_container">
                <input className="input_box" type="text" disabled="true" style={{backgroundColor: "#D3D3D3"}}/>
            </div>
            <div className="btn">
                <LongButton text="문의 접수하기" type="positive"/>
            </div>
        </div>
    );
};

export default InquiryEditor;