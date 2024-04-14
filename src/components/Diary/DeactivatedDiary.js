import './DeactivatedDiary.scss';
import '../Modal.scss';
import useModal from "../../hooks/useModal";
import ShortButton from "../ShortButton";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getDeactivatedDiary} from "../../api/diaryData";

const DeactivatedDiary = ({diarys, diaryNum}) => {
    const navigate = useNavigate();

    const {isOpen, open, close} = useModal();
    const {isModalOpen, yes, no} = useModal();
    const [diaryID, setDiaryID] = useState('');
    const goReadDiary = () => navigate(`/read-diary/${diaryID}?type=deactivated`);
    const goDeleteDiary = () => navigate('/delete-diary');


    const [username, setUsername]= useState("");
    const modalOpen = (e) => {
        yes();
        setUsername(diarys[e.target.id].partnerID);
        setDiaryID(diarys[e.target.id].diaryID);
    }

    return (
        <div className="deactivated_diary">
            <div className="select_btn" onClick={open}>
                <img src={require('../../img/Diarys/select_btn.png')} alt="btn"/>
            </div>
            {isOpen && diaryNum !== 0 && (
                <>
                    <div className="select_btn" onClick={close}>
                        <img src={require('../../img/Diarys/select_btn.png')} alt="btn"/>
                    </div>
                    <div className="select_overlay" onClick={close}></div>
                    <div className="select" onClick={goDeleteDiary}>선택
                        <img src={require('../../img/Diarys/checkbox_icon.png')} alt="checkBox"/>
                    </div>
                </>
            )}
            {diaryNum === 0 ? (
                <div className="nodiary_text">비활성화 된 일기장이 없습니다.</div>
            ):(
                <>
                {diarys.map((it, index) => (
                        <div className="diary">
                            {/*<img src={require('../../img/diary_icon.svg')} alt="diary" className="diary_img"/>*/}
                            <div className="square" id={index}  onClick={modalOpen}></div>
                            <div className="diary_text" id={index}  onClick={modalOpen}>{diarys[index].partnerID}</div>
                        </div>
                    ))}
                </>
            ) }
            {isModalOpen && (
                <>
                    <div className="overlay"></div>
                    <div className="modal">
                        <div className="modalCancel_btn">
                            <img onClick={no} src={require('../../img/cancel_btn.png')} alt="cancelBtn" className="modalCancel_img" />
                        </div>
                        <div className="modal_texts">
                            <div className="modal_text_small">{username}님과</div>
                            <div className="modal_text_small">작성했던 일기를 보러가실래요?</div>
                        </div>
                        <div className="modal_two_btn">
                            <ShortButton text="아니오" type="negative" onClick={no}/>
                            <ShortButton text="네" type="positive" onClick={goReadDiary}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DeactivatedDiary;