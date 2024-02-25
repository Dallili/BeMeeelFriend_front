import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useNavigate} from "react-router-dom";

const Rules = () => {
    const navigate = useNavigate();
    const goWelcome = () => navigate('/welcome');

    return (
        <div className="signup">
            <ProgressBar num="5"/>
            <div className="label_box">
                <SignupLabel style={{color:"#EC6B55", fontSize:"31px"}} text="비밀친구"/>
                <SignupLabel style={{fontSize:"31px"}} text="의 n가지 규칙" />
            </div>
            <div className="small_rule">
                건전한 인터넷 문화를 위해 다음 규칙을 지켜주세요!
            </div>
            <div className="rule_boxes">
                <div className="rule_box">
                    <div className="big_rule">함께 교환일기를 작성하는 파트너를 존중해주세요.</div>
                    <div className="small_rule">일기 작성 시 파트너에 대한 공격적인 언어는 사용❌</div>
                </div>
                <div className="rule_box">
                    <div className="big_rule">안전을 위해 개인 정보는 언제나 조심해주세요.</div>
                    <p className="small_rule paragraph_rule">비밀친구에서는 익명의 파트너와도 교환 일기를 작성할 수 있어요.<br/>
                        잘 모르는 파트너와 일기를 교환할 때에는, 본인을 특정할 수 있는 개인 정보가 일기에 포함되진 않았는지 주의해주세요!</p>
                </div>
                <div className="rule_box">
                    <div className="big_rule">신고 기능을 적극적으로 활용해주세요.</div>
                    <p className="small_rule paragraph_rule">규칙을 지키지 않거나 잘못된 언행을 보이는 파트너는<br/>바로 신고해주세요.</p>
                </div>
            </div>
            <div className="signup_btn blank">
                <LongButton text="동의합니다" type="positive" onClick={goWelcome}/>
            </div>
        </div>
    );
};

export default Rules;