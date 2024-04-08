import './SignUp.scss';
import {useNavigate, useOutletContext} from "react-router-dom";
import {useState} from "react";
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";

const Certification = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useOutletContext();

    const [done, isDone] = useState(false);
    const [email, setEmail] = useState('');

    const validator = (e) => {
        let regExp =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        setEmail(e.target.value);
        if (regExp.test(e.target.value)) {
            isDone(true);
        } else {
            isDone(false);
        }
    };

    // const goCodeVerify = () => navigate('/signup/verify');
    const goCodeVerify = () => {
        setUserInfo({
            ...userInfo,
            email:email
        })
        navigate('/signup/detail');
    }

    return (
        <div className="signup">
            <ProgressBar num="1" />
            <SignupLabel text="이메일 주소"/>
            <div style={{
                    marginTop:"-10px",
                    fontSize: "13px",
                    color:"gray",
            }}>이메일 주소를 입력해주세요.</div>
            <div className="numInput_box">
                <input
                    className="phonenum_input"
                    maxLength='50'
                    type="text"
                    value={email}
                    onChange={validator}
                />
            </div>
            <div className="signup_btn">
                { done === true ?
                <LongButton text="다음 단계로 넘어가기" type="positive" onClick={goCodeVerify}/>
                :
                <LongButton text="다음 단계로 넘어가기" type="disabled" isDisabled="true" />
                }
            </div>
        </div>
    );
};

export default Certification;