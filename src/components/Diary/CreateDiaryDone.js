import './DiaryDone.scss';

const CreateDiaryDone = ({who, stranger, diaryID, code}) => {
    const goMain = () => window.location.replace("/");

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
    }

    return (
        <div className="createDiaryDone">
            <div className="overlay"></div>
            <div className="done_popup">
                <div className="img_box">
                    <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                </div>
                <div className="done_title">교환일기 생성 완료</div>

                { stranger === true ? (
                    <div className="img_box">
                        <img src={require('../../img/Diarys/done_stranger.png')} alt="done" className="done_img" />
                    </div>
                ): (
                    <>
                        <div className="done_explains">
                            <div className="done_explain">{diaryID}님의 일기장이 다 만들어졌어요!</div>
                            <div className="done_explain">만들어진 일기장을 친구와 공유해보세요</div>
                        </div>
                        <div className="img_box">
                            <img src={require('../../img/Diarys/done_envelope.png')} alt="envelope" className="envelope_img"/>
                        </div>
                        <div className="invitation">
                            { who === "me" ? (
                                <div className="invitation_explain">
                                    <div className="invitation_title">친구를 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대하기</span> 위해서,</div>
                                    <div className="invitation_text">아래의 초대 코드를 친구에게 공유해주세요.</div>
                                    <input className="invitation_code" disabled="true" value={code} />
                                    <button className="invitation_btn" onClick={handleCopy}>복사</button>
                                </div>
                            ):(
                                <div className="invitation_explain">
                                    <div style={{height:"100px"}}></div>
                                </div>
                            )}
                        </div>
                    </>
                )}
                <div className="done_blank"></div>
                <div className="doneCancel_btn">
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                </div>
            </div>
        </div>
    );
};

export default CreateDiaryDone;