import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

function makeRandomNum() {
    return Math.floor(Math.random() * 9);
}

const Profile = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useOutletContext();
    const randomNicknames = ["비 내리는 정원의 정원사", "골동품 상점 주인의 안경", "떠나간 유람선", "하와이안 피자와 핑크 바지", "반짝이는 마녀", "흑백 세상의 유니콘", "세상에서 가장 빠른 거북이", "눈 부신 태양의 신", "네모난 지구", "번갯불에 구운 완두콩"];
    const randomNum = makeRandomNum();

    const [done, setIsDone] = useState(false);
    const [nickName, setNickName] = useState(randomNicknames[randomNum]);
    const [isChecked, setIsChecked] = useState({
        woman: false,
        man: false,
    });
    const [gender, setGender] = useState("");

    const onNicknameInputHandler = (e) => {
        setNickName(e.target.value);
        if(e.target.value === "") {
            setIsDone(false);
        } else if (isChecked.woman === true || isChecked.man === true){
            setIsDone(true);
        }
    };

    const changeNickname = () => {
        const newRandomNum = makeRandomNum();
        if (randomNicknames[newRandomNum] !== nickName) {
            const newNick = randomNicknames[newRandomNum];
            setNickName(newNick);
            if (isChecked.woman === true || isChecked.man === true) {
                setIsDone(true);
            }
        } else {
            changeNickname();
        }
    };

    const btnClick = (e) => {
        if(e.target.name === "woman"){
            setIsChecked({
                woman: true,
                man: false,
            });
            setGender("F");
        } else {
            setIsChecked({
                woman: false,
                man: true,
            });
            setGender("M");
        }
        if (nickName !== "") {
            setIsDone(true);
        }
    }

    const goBirthday = () => {
        setUserInfo({
            ...userInfo,
            nickname:nickName,
            gender:gender,
        })
        navigate('/signup/birthday');
    }

    return (
        <div className="signup">
            <ProgressBar num="3"/>
            <SignupLabel text="프로필"/>
            <div className="pic_box">
                <div className="pic_circle">
                    <img src={require('../../img/user_pic.png')} alt="profilePic" className="profile_pic" />
                </div>
            </div>
            <div className="nickname_box">
                <label className="large_label">별명</label>
                <div className="nicknameInput_box">
                    <input className="nickname_input" name="nickname" value={nickName} onChange={onNicknameInputHandler}/>
                    <div className="refresh_btn" onClick={changeNickname}>
                        <img src={require('../../img/SignUp/refresh_btn.png')} alt="refresh" className="refresh_img" />
                    </div>
                </div>
            </div>
            <div className="sex_box">
                <label className="large_label">성별</label>
                <div className="sexBtn_box">
                    <button className={["sex_btn", `sex_btn_${isChecked.woman}`].join(" ")} name="woman" onClick={btnClick}>여성</button>
                    <button className={["sex_btn", `sex_btn_${isChecked.man}`].join(" ")} name="man" onClick={btnClick}>남성</button>
                </div>
            </div>
            <div className="signup_btn blank">
                { done === true ?
                    <LongButton text="다음 단계로 넘어가기" type="positive" onClick={goBirthday}/>
                    :
                    <LongButton text="다음 단계로 넘어가기" type="disabled" isDisabled="true"/>
                }
            </div>
        </div>
    );
};

export default Profile;