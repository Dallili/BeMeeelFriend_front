import './DiaryDone.scss';
import {useEffect, useState} from "react";
import {deleteMatching, getMatchingCode} from "../../api/matching";
import {deleteDiary} from "../../api/diary";
import {shareKakao} from "../../api/kakaoShare";

const DiaryPreparing = ({who, diaryID, matchingID, name}) => {
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

    const onUnknownDelete = async () => {
        const res = await deleteMatching(matchingID);
        if (res) {
            window.location.replace('/history');
        }
    };

    const onKnownDelete = async () => {
        const res = await deleteDiary(diaryID);
        if(res) {
            window.location.replace('/history');
        }
    }

    const onClickShareKakao = () => {
        shareKakao(myInvitationCode);
    };

    return (
        <div className="diaryPreparing">
            <div className="overlay"></div>
            <div className="done_popup">

                { who === "stranger" ? (
                    <>
                        <div className="done_title" style={{fontSize:"45px"}}>일기장 준비 중...</div>
                        <div className="img_box" style={{marginTop:"-10px"}}>
                            <img src={require('../../img/Diarys/done_onprogress.png')} alt="done" className="done_img" />
                        </div>
                        <div className="done_explains">
                            <div className="done_explain">조금만 기다려 주시면</div>
                            <div className="done_explain">마음에 쏙 드는 친구를 찾아드릴게요!</div>
                            <button className="match_cancel_btn" onClick={onUnknownDelete} style={{marginTop:"20px"}}>매칭 취소 하기</button>
                        </div>
                    </>
                ) : (
                    <>
                    <div className="done_title" style={{fontSize:"45px"}}>일기장 준비 중...</div>
                    <div className="img_box" style={{marginTop:"-40px"}}>
                        <img src={require('../../img/Diarys/done_onprogress.png')} alt="done" className="done_img" />
                    </div>
                    <div className="invitation">
                        <div className="invitation_explain" style={{marginTop: "-10px"}}>
                            <div className="invitation_title">친구를 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대하기</span> 위해서,</div>
                            <div className="invitation_text">아래의 초대 코드를 친구에게 공유해주세요.</div>
                            <div style={{display: "flex", alignItems:"center", gap: "20px", marginTop:"20px"}}>
                                <button id="kakaotalk-sharing-btn" onClick={onClickShareKakao} />
                                <button className="copy_btn" onClick={handleCopy}>코드복사</button>
                            </div>
                            <input className="invitation_code" disabled="true" value={myInvitationCode} style={{display:"none"}}/>
                            <button className="match_cancel_btn" onClick={onKnownDelete} style={{marginTop:"40px"}}>매칭 취소 하기</button>
                        </div>
                    </div>
                    </>
                )}
                <div className="doneCancel_btn">
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goHistory}/>
                </div>
            </div>
        </div>
    );
};

export default DiaryPreparing;