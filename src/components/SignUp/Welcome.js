import './SignUp.scss';
import LongButton from "../LongButton";
import SignupLabel from "./components/SignupLabel";
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const goMain = () => navigate('/');

    return (
        <div className="signup welcome">
            <SignupLabel style={{fontSize:"30px",}} text="반짝이는 마녀님,"/>
            <div style={{display:"flex", flexDirection:"column", marginTop:"-30px", }}>
                <div style={{display:"flex"}}>
                    <SignupLabel style={{color:"#EC6B55", fontSize:"26px"}} text="비밀친구"/>
                    <SignupLabel style={{fontSize:"26px"}} text="에 오신 걸 환영해요!" />
                </div>
                <p className="paragraph">가입이 완료되었습니다.<br/>이제부터 비밀친구를 통해<br/>친구들과 멋진 교환일기를 작성해보세요!</p>
            </div>
            <div className="signup_btn blank fixed_btn">
                <LongButton text="시작하기" type="positive" onClick={goMain}/>
            </div>
        </div>
    );
};

export default Welcome;