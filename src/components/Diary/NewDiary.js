import './NewDIary.scss';
import {useState} from "react";
import LongButton from "../LongButton";
import {useNavigate} from "react-router-dom";

const NewDiary = () => {
    const navigate = useNavigate();
    const [withWho, setWithWho] = useState("friend");
    const [isClicked, setIsClicked] = useState("left");
    const withFriend = () => {
        setWithWho("friend");
        setIsClicked("left");
    }
    const withStranger = () => {
        setWithWho("stranger");
        setIsClicked("right");
    }

    const goWithFriend = () => navigate('/newdiary/with-friend');
    const goWithStranger = () => navigate('/newdiary/with-new-friend');

    return (
        <div className="new_diary">
            <div className="question_text">누구와 일기장을 주고받으시겠어요?</div>
            <div className="newDiary_btns">
                <button className={["newDiary_btn_L", `newDiary_btn_L_${isClicked}`].join(" ")} onClick={withFriend}>아는 사람과 주고받을래요!</button>
                <button className={["newDiary_btn_R", `newDiary_btn_R_${isClicked}`].join(" ")} onClick={withStranger}>모르는 사람과 주고받을래요!</button>
            </div>
            {withWho === "friend" ? (
                <div className="newDiary_explain">
                    <div className="circle">
                        <img src={require('../../img/Diarys/envelope_icon.png')} alt="icon" className="newDiary_icon" />
                    </div>
                    <div className="explain_bg">
                        <div className="title">지인 매칭</div>
                        <div className="explain">친구에게 초대받았거나 친구를 초대하고 싶은 경우 지인 매칭을 통해서 일기장을 만들어보세요.</div>
                        <LongButton style={{
                            height: "75px",
                            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15))",
                            borderRadius: "25px",
                        }} onClick={goWithFriend} text="익명의 친구와 만들게요" type="positive" />
                    </div>
                </div>
            ) : (
                <div className="newDiary_explain">
                    <div className="circle">
                        <img src={require('../../img/Diarys/search_icon.png')} alt="icon" className="newDiary_icon" />
                    </div>
                    <div className="explain_bg">
                        <div className="title">랜덤 매칭</div>
                        <div className="explain">새로운 사람과 일기장을 주고받고 싶은 경우 랜덤 매칭을 통해서 일기장을 만들어보세요.</div>
                        <LongButton style={{
                            height:"75px",
                            filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15))",
                            borderRadius:"25px",
                        }} onClick={goWithStranger} text="익명의 친구와 만들게요" type="positive" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewDiary;