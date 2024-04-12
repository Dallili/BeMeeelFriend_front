import './DiaryDone.scss';
import {useNavigate} from "react-router-dom";

const DiaryPreparing = ({who}) => {
    const navigate = useNavigate();
    const goHistory = () => navigate('/history');
    const myInvitationCode = "AFD#@RSFDJSFL@LFDS";

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
                            <button className="invitation_btn">복사</button>
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