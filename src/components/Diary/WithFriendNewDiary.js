import './WithSbNewDiary.scss';
import NextBtn from "./components/NextBtn";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const WithFriendNewDiary = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState("left");
    const [imgBlack, setImgBlack] = useState(true);

    const leftClicked = () => {
        setClicked("left");
        setImgBlack(true);
    };

    const rightClicked = () => {
        setClicked("right");
        setImgBlack(false);
    };

    const goChooseColor = () => navigate('/newdiary/color');
    const goRegisterCode = () => navigate('/newdiary/register-code');

    return (
        <div className="withFriend_newDiary">
            <div className="instruction">
                아래에서 해당하는 버튼을 클릭해주세요.
            </div>
            <div className="friendNewDiary_btns">
                <button className={["friendNewDiary_btn_L", `btnL_${clicked}`].join(" ")} onClick={leftClicked}>
                    { imgBlack === true ? (
                        <img src={require('../../img/Diarys/give_icon2.png')} alt="icon" className="icon1" />
                    ) : (
                        <img src={require('../../img/Diarys/give_icon1.png')} alt="icon" className="icon1" />
                    )}
                    <div style={{
                        margin:"25px 0 40px 0",
                        fontWeight:"700",
                    }}>친구를 초대할래요!</div>
                    <div style={{
                        fontSize:"13px",
                    }}>초대코드를 친구에게 공유해주세요.</div>
                </button>
                <button className={["friendNewDiary_btn_R", `btnR_${clicked}`].join(" ")} onClick={rightClicked}>
                    { imgBlack === false ? (
                        <img src={require('../../img/Diarys/get_icon2.png')} alt="icon" className="icon1" />
                    ) : (
                        <img src={require('../../img/Diarys/get_icon1.png')} alt="icon" className="icon1" />
                    )}
                    <div style={{
                        margin:"25px 0 40px 0",
                        fontWeight:"700",
                    }}>친구에게 초대받았어요!</div>
                    <div style={{
                        fontSize:"13px",
                    }}>친구에게 공유받은 초대코드를 입력해주세요.</div>
                </button>
            </div>
            { clicked === "left" ? (
                <NextBtn text="다음 단계로 넘어가기" onClick={goChooseColor}/>
                ) : (
                <NextBtn text="다음 단계로 넘어가기" onClick={goRegisterCode}/>
            )}
        </div>
    );
};

export default WithFriendNewDiary;