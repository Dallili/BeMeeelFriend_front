import './DiaryDone.scss';
import {useEffect, useState} from "react";
import {getMatchingCode} from "../../api/matching";
import {deleteDiary} from "../../api/diary";

const DiaryPreparing = ({who, diaryID}) => {
    const goHistory = () => window.location.replace('/history');

    const [myInvitationCode, setCode] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(myInvitationCode);
    }

    const getCode = async () => {
        const res = await getMatchingCode(diaryID);
        if (res !== "fail") {
            setCode(res);
        }
    }

    useEffect(() => {
        if(who !== "stranger"){
            getCode();
        }
    }, []);

    const onDelete = async () => {
        await deleteDiary(diaryID);
    };

    return (
        <div className="diaryPreparing">
            <div className="overlay"></div>
            <div className="done_popup">
                <div className="done_title" style={{fontSize:"45px"}}>일기장 준비 중...</div>
                <div className="img_box">
                    <img src={require('../../img/Diarys/done_onprogress.png')} alt="done" className="done_img" />
                </div>
                { who === "stranger" ? (
                    <div className="done_explains">
                        <div className="done_explain">조금만 기다려 주시면!</div>
                        <div className="done_explain">마음에 쏙 드는 친구를 찾아드릴게요!</div>
                    </div>
                ) : (
                    <div className="invitation">
                        <div className="invitation_explain">
                            <div className="invitation_title">친구를 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대하기</span> 위해서,</div>
                            <div className="invitation_text">아래의 초대 코드를 친구에게 공유해주세요.</div>
                            <input className="invitation_code" disabled="true" value={myInvitationCode} />
                            <button className="invitation_btn" onClick={handleCopy}>복사</button>
                            <button className="invitation_btn" onClick={onDelete} style={{marginTop:"20px"}}>매칭 취소</button>
                        </div>
                    </div>
                )}
                <div className="doneCancel_btn">
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goHistory}/>
                </div>
            </div>
        </div>
    );
};

export default DiaryPreparing;