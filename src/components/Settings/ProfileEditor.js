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
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onInputHandler = (e) => {
        if (e.target.value.length > 20){
            e.value = e.value.substring(0, 20);
        }
        setInputCount(e.target.value.length);
        //입력한 nickname 화면에 반영
        setNickName(e.target.value);
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
        const res = await patchMemberInfo({
            nickname: nickName,
            birthday: birthday
        });
        if (res === true) {
            window.location.replace("/settings");
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