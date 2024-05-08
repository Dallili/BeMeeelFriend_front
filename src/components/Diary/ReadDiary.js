import './ReadDiary.scss';
import DiaryModal from "./DiaryModal";
import useModal from "../../hooks/useModal";
import {useNavigate, useParams} from "react-router-dom";
import {deactivateDiary, deleteDiary} from "../../api/diary";
import {useEffect, useState} from "react";

const ReadDiary = ({date, content, sendDiary, type, goSendDiary}) => {
    const navigate = useNavigate();

    const {diaryID} = useParams();
    const goReadDiary = () => navigate(`/read-diary/${diaryID}`);
    const {isModalOpen, yes, no} = useModal();
    const {isOpen, open, close} = useModal();

    const [dateAndTime, setDateAndTime] = useState([]);

    const onDeactivate = async () => {
        await deactivateDiary(diaryID);
        window.location.replace('/');
    };

    const onDelete = async () => {
        await deleteDiary(diaryID);
        window.location.replace('/');
    };

    const [wantDelete, setWantDelete] = useState(false);
    const willDelete = () => {
        open();
        setWantDelete(true);
    }

    useEffect(() => {
        setDateAndTime(content == null ? ["", ""] : (content === "일기를 작성할 차례입니다." || content === "아직 작성된 일기가 없습니다.") ? date.split(',') : date.split(' '));
    }, [date]);

    return (
        <div className="read_diary">
            {type === "history" ? (
                <div className="indexes">
                    <div className="index left index_clicked" onClick={() => navigate(`/read-diary/${diaryID}?type=history`, {state:"refresh"})}>일기 보기</div>
                    <div className="index center" onClick={open}>반환 요청</div>
                    <div className="index right" onClick={yes}>비활성화</div>
                </div>
            ): type === "deactivated" ? (
                <div className="indexes">
                    <div className="index left index_clicked" onClick={() => navigate(`/read-diary/${diaryID}?type=deactivated`, {state:"refresh"})}>일기 보기</div>
                    {/*<div className="index center" style={{visibility:"hidden"}}></div>*/}
                    <div className="index right" onClick={willDelete}>일기 삭제</div>
                </div>
            ): (
                <div className="indexes">
                    <div className="index left index_clicked" onClick={goReadDiary}>일기 보기</div>
                    <div className="index center" onClick={goSendDiary}>일기 교환</div>
                    <div className="index right" onClick={yes}>비활성화</div>
                </div>
            )}
            <div className="date_box">
                <img src={require('../../img/Diarys/calendar_icon.png')} alt="icon"/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className="date">{dateAndTime[0]}</div>
                    <div className="time">{dateAndTime[1]}</div>
                </div>
            </div>
            <div className="diaryInput_box">
                <textarea className="diary_input" value={content} disabled={true}></textarea>
            </div>
            {isModalOpen && <DiaryModal onClick={no} onClick2={onDeactivate} text1="해당 일기장을 비활성화 하시겠습니까?" text2="비활성화한 일기장은" text3="다시 복구할 수 없습니다." btn="비활성화" />}
            {isOpen && wantDelete && <DiaryModal onClick={close} onClick2={onDelete} text1="해당 일기장을 삭제 하시겠습니까?" text2="삭제한 일기장은" text3="다시 복구할 수 없습니다." btn="삭제" />}
            {isOpen && !wantDelete && <DiaryModal onClick={close} onClick2={onDelete} text1="반환 요청 하시겠습니까?" text2="요청 취소는 불가합니다." btn="반환 요청" />}
        </div>
    );
};

export default ReadDiary;