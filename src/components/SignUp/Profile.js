import './SignUp.scss';
import ProgressBar from "./components/ProgressBar";
import SignupLabel from "./components/SignupLabel";
import LongButton from "../LongButton";
import {useEffect, useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";

function makeRandomNum() {
    return Math.floor(Math.random() * 9);
}

const Profile = () => {
    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useOutletContext();
    const randomNicknames = ["비내리는정원의정원사", "골동품상점주인의안경", "떠나간유람선", "하와이안피자와핑크바지", "반짝이는마녀", "흑백세상의유니콘", "세상에서가장빠른거북이", "눈부신태양의신", "네모난지구", "번갯불에구운 완두콩"];
    const randomNum = makeRandomNum();

    const [done, setIsDone] = useState(false);
    const [nickName, setNickName] = useState(sessionStorage.getItem("nickname") ? sessionStorage.getItem("nickname") : randomNicknames[randomNum]);
    const [isChecked, setIsChecked] = useState({
        woman: false,
        man: false,
    });
    const [gender, setGender] = useState(sessionStorage.getItem("gender") ? sessionStorage.getItem("gender") : "");

    const regExp = /^[A-Za-z0-9가-힣]*$/

    // 입력한 정보가 있는 경우
    useEffect(() => {
        if (sessionStorage.getItem("gender") === "F") {
            setIsChecked({
                ...isChecked,
                woman: true
            })
        } else if (sessionStorage.getItem("gender") === "M") {
            setIsChecked({
                ...isChecked,
                man: true
            })
        }
    }, []);

    useEffect(() => {
        if (gender && nickName.length > 2) {
            setIsDone(true);
        } else {
            setIsDone(false);
        }
    }, [gender, nickName]);

    // 닉네임 입력
    const onNicknameInputHandler = (e) => {
        let tempname = e.target.value;
        if(tempname.search(/\s/) !== -1) {
            alert("닉네임에 빈 칸을 포함할 수 없습니다.");
            tempname = tempname.substring(0, e.target.value.length -1);
        }
        if(tempname.length > 20) {
            alert("닉네임은 20자까지 가능합니다.");
            tempname = tempname.substring(0, 20);
        }
        setNickName(tempname);
    };

    // 닉네임 랜덤 선택
    const changeNickname = () => {
        const newRandomNum = makeRandomNum();
        if (randomNicknames[newRandomNum] !== nickName) {
            const newNick = randomNicknames[newRandomNum];
            setNickName(newNick);
        } else {
            changeNickname();
        }
    };

    // 성별 선택
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
    }

    const goBirthday = () => {
        if(!regExp.test(nickName)){
            alert("닉네임에 특수문자 사용 불가, 한글 자음과 모음 사용 할 수 없습니다.");
        } else {
            sessionStorage.setItem("nickname", nickName);
            sessionStorage.setItem("gender", gender);
            setUserInfo({
                ...userInfo,
                nickname:nickName,
                gender:gender,
            })
            navigate('/signup/birthday');
        }
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