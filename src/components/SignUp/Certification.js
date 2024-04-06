import './SignUp.scss';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useInput} from "../../hooks/useInput";

const Certification = () => {
    const navigate = useNavigate();

    const [done, isDone] = useState(false);
    const [phoneNum, setPhoneNum] = useState('');

    const validator = (e) => {
        let regExp =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        setPhoneNum(e.target.value);
        if (regExp.test(e.target.value)) {
            isDone(true);
        } else {
            isDone(false);
        }
    };

    const email = useInput(phoneNum, validator);

    // useEffect(() => {
    //     console.log(email.value);
    //     if (email.value !== null) {
    //         isDone(true);
    //     } else {
    //         isDone(false);
    //     }
    // }, [email.value]);

    // const ButtonChange = (e) => {
    //     const text = e.target.value;
    //     setPhoneNum(text);
    //     if(text.length < 11 ) {
    //         isDone(false);
    //     } else if (text.length === 11){
    //         isDone(true);
    //     } else {
    //         e.value = e.value.slice(0,10);
    //     }
    // };

    const goCodeVerify = () => navigate('/signup/verify');

    return (
        <div className="signup">
            <ProgressBar num="1" />
            <SignupLabel text="본인 인증"/>
            <div style={{
                    marginTop:"-10px",
                    fontSize: "13px",
                    color:"gray",
            }}>인증 코드를 전송 받을 메일 주소를 입력해주세요.</div>
            <div className="numInput_box">
                <input
                    className="phonenum_input"
                    maxLength='50'
                    type="text"
                    value={phoneNum}
                    onChange={validator}
                />
            </div>
            <div className="signup_btn">
                { done === true ?
                <LongButton text="인증 코드 보내기" type="positive" onClick={goCodeVerify}/>
                :
                <LongButton text="인증 코드 보내기" type="disabled" isDisabled="true" />
                }
            </div>
        </div>
    );
};

export default Certification;