import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CodeCerification = () => {
    const navigate = useNavigate();
    const goIdPassword = () => navigate('/signup/detail', { replace: true });

    const [done, isDone] = useState(false);
    const [input, setInput] = useState('');
    const [isTrue, setIsTrue] = useState(true);
    const [noticeText, setNoticeText] = useState("");
    const correctCode = '12345678';

    const ButtonChange = (e) => {
        const text = e.target.value;
        setInput(text);
        if(text.length < 8 ) {
            isDone(false);
        } else if (text.length === 8){
            isDone(true);
        } else {
            e.value = e.value.slice(0,8);
        }
    };

    const noticeDelete = () => {
        setIsTrue(false);
        setInput("");
    };

    const sendCodeAgain = () => {
        setNoticeText("인증코드를 재전송해드렸습니다.\n이메일을 확인해주세요.");
        // 클릭할 경우 다시 인증번호 보내줌
        setTimeout(() => noticeDelete(),1000);
        setTimeout(() => setIsTrue(true),4000);
    };

    const codeCheck = () => {
        if(input !== correctCode) {
            setNoticeText("입력하신 인증 코드가 올바르지 않습니다.\n다시 한번 확인해주세요.");
            setIsTrue(false);
            setTimeout(() => setIsTrue(true),3000);
        } else {
            goIdPassword();
        }
    };

    return (
        <div className="signup">
            <ProgressBar num="1" />
            <SignupLabel text="인증 코드"/>
            <div className="codeInput_box">
                <input
                    className="code_input"
                    maxLength='8'
                    type="number"
                    value={input}
                    onChange={ButtonChange}
                />
            </div>
            <div className="signup_btn">
                { done === true ?
                    <LongButton text="인증하기" type="positive" onClick={codeCheck}/>
                    :
                    <LongButton text="인증하기" type="disabled" isDisabled="true" />
                }
            </div>
            <div className="explain_box">
                <button className="explain_btn" onClick={sendCodeAgain}>
                    혹시 인증코드가 오지 않았나요?
                </button>
            </div>
            { isTrue === false ?
            <label className="notice_label">{noticeText}</label>
                :
                <></>
            }
        </div>
    );
};

export default CodeCerification;