import LongButton from "../LongButton";
import './ProfileEditor.scss'
import './SettingsCommon.scss'
import SettingTextLabel from "./components/SettingTextLabel";
import {useEffect, useState} from "react";
import {getUserInfo, patchMemberInfo} from "../../api/user";
import DatePicker from "react-datepicker";


const ProfileEditor = () => {
    const [nickName, setNickName] = useState("");
    const [inputCount, setInputCount] = useState(0);
    const [birthday, setBirthday] = useState();
    const [selectedDate, setSelectedDate] = useState("");

    const regExp = /^[A-Za-z0-9가-힣]*$/
    const onInputHandler = (e) => {
        let tempname = e.target.value;
        if(tempname.search(/\s/) !== -1) {
            alert("닉네임에 빈 칸을 포함할 수 없습니다.");
            tempname = tempname.substring(0, e.target.value.length - 1);
        }
        setNickName(tempname);
        setInputCount(e.target.value.length);
    }

    const onChangeHandler = (selected) => {
        const year = selected.toLocaleDateString('en-US', {year:'numeric'});
        const month = selected.toLocaleDateString('en-US', {month:'2-digit'});
        const date = selected.toLocaleDateString('en-US', {day:'2-digit'});
        setBirthday(`${year}-${month}-${date}`);
    }

    const getInfo = async () => {
        const res = await getUserInfo();
        setNickName(res.nickname);
        setInputCount(res.nickname.length);
        setSelectedDate(res.birthday);
    }

    useEffect(() => {
        getInfo();
    }, []);

    const editInfo = async () => {
        if (regExp.test(nickName)) {
            const res = await patchMemberInfo({
                nickname: nickName,
                birthday: birthday
            });
            if (res === true) {
                window.location.replace("/settings");
            }
        } else {
            alert("닉네임에 특수문자 사용 불가, 한글 자음과 모음 사용 할 수 없습니다.");
        }

    }

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
            <div className="input_container">
                <DatePicker
                    className="datePicker"
                    dateFormat='yyyy-MM-dd'
                    minDate={new Date('1900-01-01')}
                    maxDate={new Date()}
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedDate(date);
                        onChangeHandler(date);
                    }}
                />
            </div>
            <div className="btn">
                <LongButton onClick={editInfo} text="완료" type="positive"/>
            </div>
        </div>
    )
}

export default ProfileEditor;