import LongButton from "../LongButton";
import './ProfileEditor.scss'
import './SettingsCommon.scss'
import SettingTextLabel from "./components/SettingTextLabel";
import {useEffect, useState} from "react";

const nick = "jerry";
const year = [1999, 2000, 2001, 2002, 2003];
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ProfileEditor = ({getNickName, birthDay}) => {
    const [nickName, setNickName] = useState(nick);
    const [inputCount, setInputCount] = useState(nick.length);

    const onInputHandler = (e, maxlength) => {
        if (e.target.value.length > maxlength){
            e.value = e.value.substring(0, maxlength);
        }
        //saving the length of a nickname written in the input box
        setInputCount(e.target.value.length);
        //입력한 nickname 화면에 반영
        setNickName(e.target.value);
    }

    function setScreenSize() {
        let vw = window.innerWidth * 0.01;
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

    return (
        <div className="editor">
            <SettingTextLabel text="별명" />
            <div className="input_container">
                <input
                    className="input_box"
                    type="text"
                    maxLength='20'
                    value={nickName}
                    placeholder="별명을 입력하세요"
                    onChange={onInputHandler}
                />
            </div>
            <div className="counter">{inputCount}자/20자</div>
            <SettingTextLabel text="생일" />
            <div className="select_container">
                <select className="select">
                    {year.map((it) => (
                        <option className="option" value={it}>{it}</option>
                        ))}
                </select>
                <div className="ymd">년</div>
                <select className="select">
                    {month.map((it) => (
                        <option className="option" value={it}>{it}</option>
                    ))}
                </select>
                <div className="ymd">월</div>
                <select className="select">
                    {date.map((it) => (
                        <option className="option" value={it}>{it}</option>
                    ))}
                </select>
                <div className="ymd">일</div>
            </div>
            <div className="btn">
                <LongButton text="완료" type="positive"/>
            </div>
        </div>
    )
}

export default ProfileEditor;