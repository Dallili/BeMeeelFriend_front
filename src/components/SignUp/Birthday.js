import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

const Birthday = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useOutletContext();

    const [done, setIsDone] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const goRules = () => {
        const year = selectedDate.toLocaleDateString('en-US', {year:'numeric'});
        const month = selectedDate.toLocaleDateString('en-US', {month:'2-digit'});
        const date = selectedDate.toLocaleDateString('en-US', {day:'2-digit'});
        setUserInfo({
            ...userInfo,
            birthday:`${year}-${month}-${date}`
        })
        navigate('/signup/rules');
    }

    const goRulesNoBirthday = () => {
        setUserInfo({
            ...userInfo,
            birthday:'0000-00-00'
        })
        navigate('/signup/rules');
    }

    return (
        <div className="signup">
            <ProgressBar num="4"/>
            <SignupLabel text="생일"/>
            <div className="dateInput_box">
                <DatePicker
                    className="datePicker"
                    dateFormat='yyyy-MM-dd'
                    minDate={new Date('1900-01-01')}
                    maxDate={new Date()}
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedDate(date)
                        setIsDone(true)}
                    }/>
            </div>
            <div className="signup_btn blank">
                { done === true ?
                    <LongButton text="다음 단계로 넘어가기" type="positive" onClick={goRules}/>
                    :
                    <LongButton text="다음 단계로 넘어가기" type="disabled" isDisabled="true"/>
                }
            </div>
            <div className="explain_box">
                <button className="explain_btn" onClick={goRulesNoBirthday}>
                    입력하지 않고 넘어갈래요.
                </button>
            </div>
        </div>
    );
};

export default Birthday;