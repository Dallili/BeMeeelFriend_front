import './ReadDiary.scss';
import useModal from "../../hooks/useModal";
import {useNavigate, useParams} from "react-router-dom";
import SendDiaryDone from "./SendDiaryDone";
import DiaryModal from "./DiaryModal";
import {deactivateDiary} from "../../api/diary";

const SendDiary = ({date, content, sendDiary, goSendDiary}) => {
    const navigate = useNavigate();
    const {diaryID} = useParams();
    const goReadDiary = () => navigate(`/read-diary/${diaryID}`);

    const {isModalOpen, yes, no} = useModal();

    // const dateAndTime = date.split(' ');
    const date1 = new Date().toLocaleDateString()

    const onDeactivate = () => {
        deactivateDiary(diaryID);
    };

    return (
        <div className="send_diary">
            <div className="indexes">
                <div className="index left" onClick={goReadDiary}>일기 보기</div>
                <div className="index center index_clicked" onClick={goSendDiary}>일기 교환</div>
                <div className="index right" onClick={yes}>비활성화</div>
            </div>
            <div className="date_box">
                <img src={require('../../img/Diarys/calendar_icon.png')} alt="icon"/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className="date">{date1}</div>
                    <div className="time" style={{visibility:"hidden"}}>time</div>
                </div>
            </div>
            <div className="diaryInput_box">
                <textarea className="diary_input" value={content} disabled="true">

                </textarea>
            </div>
            {isModalOpen && <DiaryModal onClick={no} onClick2={onDeactivate} text1="해당 일기장을 비활성화 하시겠습니까?" text2="비활성화한 일기장은" text3="다시 복구할 수 없습니다." btn="비활성화" />}
            {sendDiary && <SendDiaryDone />}
        </div>
    )
}

export default SendDiary;