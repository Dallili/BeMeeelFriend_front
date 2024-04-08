import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

const IdPassword = () => {
    // 버튼 활성화
    const [done, setIsDone] = useState(false);
    // 경고창 관련
    const [isTrue, setIsTrue] = useState(true);
    const [noticeText, setNoticeText] = useState("");
    // 패스워드 저장
    const [password, setPassword] = useState('');
    const [isPassTrue, setIsPassTrue] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState('');

    const {userInfo, setUserInfo} = useOutletContext();

    // 패스워드 일치 확인
    // 영문자 숫자 특수문자 섞어서 8자리 이상
    let passCheckEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*])(?=.*[0-9]).{8,25}$/;
    const passCheck = (pass) => {
        return passCheckEx.test(pass);
    }

    const onPassInputHandler = (e) => {
        const getPass = e.target.value;
        setPassword(getPass);

        if (passCheck(getPass)){
            setIsTrue(true);
            setIsPassTrue(true);
        } else {
            setNoticeText("조건에 맞게 작성해주세요.");
            setIsTrue(false);
            setIsDone(false);
            setIsPassTrue(false);
        }
    };

    const onCheckPassInputHandler = (e) => {
        const getCheckPass = e.target.value;
        setPasswordCheck(getCheckPass);

        if (isPassTrue && password === getCheckPass){
            setIsTrue(true);
            setIsDone(true);
        } else {
            setNoticeText("입력하신 비밀번호가 서로 일치하지 않습니다.\n입력을 다시 한번 확인해주세요.");
            setIsTrue(false);
            setIsDone(false);
        }
    };

    const navigate = useNavigate();

    const goProfile = () => {
        setUserInfo({
            ...userInfo,
            password:password
        })
        navigate('/signup/profile');
    }

    return (
        <div className="signup">
            <ProgressBar num="2" />
            <SignupLabel text="비밀번호 설정"/>
            <div className="password_box">
                <label className="large_label">비밀번호</label>
                <div className="passwordInput_box">
                    <input className="password_input" id="pass1" name="newPass" value={password} type="text" placeholder="8글자 이상 26글자 미만"
                        onChange={onPassInputHandler}
                    />
                    <input className="password_input" id="pass2" name="newPassCheck" value={passwordCheck} type="text" placeholder="비밀번호 재입력"
                        onChange={onCheckPassInputHandler}
                    />
                </div>
            </div>
            <div className="signup_btn blank">
                { done === true ?
                    <LongButton text="다음 단계로 넘어가기" type="positive" onClick={goProfile}/>
                    :
                    <LongButton text="다음 단계로 넘어가기" type="disabled" isDisabled="true" />
                }
            </div>
            { isTrue === false ?
                <label className="notice_label">{noticeText}</label>
                :
                <></>
            }
        </div>
    );
};

export default IdPassword;