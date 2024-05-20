import './DiaryDone.scss';
import {useNavigate} from "react-router-dom";

const SendDiaryDone = ({entryID, diaryID}) => {
    const navigate = useNavigate();
    const goMain = () => window.location.replace("/");
    const goEmotionReport = () => navigate(`/emotion-report/${entryID}?diaryID=${diaryID}`);

    return (
        <div className="sendDiaryDone">
            <div className="overlay"></div>
            <div className="done_popup">
                <div className="img_box">
                    <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                </div>
                <div className="done_title">일기 전달 완료</div>
                <div className="done_explains">
                    <div className="done_explain">친구에게 일기장이 전달되었어요!</div>
                    <div className="done_explain">오늘의 감정 분석 결과를 보러 가볼까요?</div>
                </div>
                <div className="img_box">
                    <img style={{marginLeft:"-10px"}} src={require('../../img/Diarys/done_send.png')} alt="confetti" className="confetti_img"/>
                </div>
                <div className="done_blank"></div>
                <button className="go_btn" onClick={goEmotionReport}>분석 결과 보러가기</button>
                <div className="done_blank"></div>
                <div className="done_blank"></div>
                <div className="doneCancel_btn" >
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                </div>
            </div>
        </div>
    );
};

export default SendDiaryDone;