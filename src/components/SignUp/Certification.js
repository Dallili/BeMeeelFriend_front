import './SignUp.scss';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";

const Certification = () => {
    const navigate = useNavigate();

    const [done, isDone] = useState(false);
    const [phoneNum, setPhoneNum] = useState('');

    const ButtonChange = (e) => {
        const text = e.target.value;
        setPhoneNum(text);
        if(text.length < 11 ) {
            isDone(false);
        } else if (text.length === 11){
            isDone(true);
        } else {
            e.value = e.value.slice(0,10);
        }
    };

    const goCodeVerify = () => navigate('/signup/verify');

    return (
        <div className="signup">
            <ProgressBar num="1" />
            <SignupLabel text="본인 인증"/>
            <div style={{
                    marginTop:"-10px",
                    fontSize: "13px",
                    color:"gray",
            }}>인증 코드를 전송 받을 전화번호를 입력해주세요.</div>
            <div className="numInput_box">
                <input
                    className="phonenum_input"
                    maxLength='5'
                    type="number"
                    value={phoneNum}
                    onChange={ButtonChange}
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