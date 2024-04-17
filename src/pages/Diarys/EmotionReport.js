import '../../components/Diary/DiaryDone.scss';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";
import {getActivated} from "../../api/diary";

const EmotionReport = ({username}) => {
    const navigate = useNavigate();

    const [name, setNickname] = useState("");

    const getInfo = async () => {
        const res = await getUserInfo();
        setNickname(res.nickname);
    }

    useEffect(() => {
        getInfo();
    }, []);
    const goMain = () => window.location.replace("/");
    const [progress, setProgress] = useState([83, 37, 30, 27, 25, 18]);

    return (
        <div className="emotion_report">
            <div className="overlay"></div>
            <div className="done_popup">
                <div className="done_titles" style={{paddingLeft: "50px"}}>
                    <img src={require('../../img/Diarys/star.png')} alt="img" />
                    <div className="done_title_emotion">{name}님의</div>
                    <div className="done_title_emotion">오늘 기분은</div>
                </div>
                <div className="done_explains">
                    <div className="done_explain">작성한 일기를 바탕으로 분석한</div>
                    <div className="done_explain">오늘의 감정데이터입니다.</div>
                </div>
                <div className="emotions">
                    <div className="emotion">
                        <div className="bar_text">행복</div>
                        <progress className="emotion_bar" value={`${progress[0]}`} max="100"></progress>
                        <div className="bar_text">{progress[0]}%</div>
                    </div>
                    <div className="emotion">
                        <div className="bar_text">당황</div>
                        <progress className="emotion_bar color2" value={`${progress[1]}`} max="100"></progress>
                        <div className="bar_text">{progress[1]}%</div>
                    </div>
                    <div className="emotion">
                        <div className="bar_text">슬픔</div>
                        <progress className="emotion_bar color3" value={`${progress[2]}`} max="100"></progress>
                        <div className="bar_text">{progress[2]}%</div>
                    </div>
                    <div className="emotion">
                        <div className="bar_text">분노</div>
                        <progress className="emotion_bar color4" value={`${progress[3]}`} max="100"></progress>
                        <div className="bar_text">{progress[3]}%</div>
                    </div>
                    <div className="emotion">
                        <div className="bar_text">불안</div>
                        <progress className="emotion_bar color5" value={`${progress[4]}`} max="100"></progress>
                        <div className="bar_text">{progress[4]}%</div>
                    </div>
                    <div className="emotion">
                        <div className="bar_text">혐오</div>
                        <progress className="emotion_bar color6" value={`${progress[5]}`} max="100"></progress>
                        <div className="bar_text">{progress[5]}%</div>
                    </div>
                </div>
                <div className="diary_blank"></div>
                <div className="diary_blank"></div>
                <div className="doneCancel_btn">
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                </div>
            </div>
        </div>
    );
};

export default EmotionReport;