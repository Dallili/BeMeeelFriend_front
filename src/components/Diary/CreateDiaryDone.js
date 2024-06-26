import './DiaryDone.scss';
import {shareKakao} from "../../api/kakaoShare";

const CreateDiaryDone = ({who, stranger, diaryID, code}) => {
    const goMain = () => window.location.replace("/");

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
    }

    const onClickShareKakao = () => {
        shareKakao(code);
    };

    return (
        <div className="createDiaryDone">

                { stranger === true ? (
                    <>
                        <div className="overlay"></div>
                    <div className="done_popup">
                        <div className="img_box" style={{marginTop: "-100px"}}>
                            <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                        </div>
                        <div className="done_title">교환일기 생성 완료</div>
                        <div className="done_explains">
                            <div className="done_explain">조금만 기다려 주시면</div>
                            <div className="done_explain">마음에 쏙 드는 친구를 찾아드릴게요!</div>

                        </div>
                    <div className="img_box" style={{}}>
                        <img src={require('../../img/Diarys/done_stranger.png')} alt="done" className="done_img" />
                    </div>
                        <div className="invitation">
                            <div className="invitation_explain">
                                <div style={{height:"100px"}}></div>
                        <button className="invitation_btn" onClick={() => window.location.replace('/history')}
                                style={{width: "150px", height: "40px", marginTop: "-90px", fontWeight:"500"}}>히스토리 캐비닛으로</button>
                        </div>
                        </div>
                        <div className="doneCancel_btn" style={{marginTop:"-150px"}}>
                            <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                        </div>
                    </div>
                    </>
                ):  who === "me" ? (
                    <>
                        <div className="overlay"></div>
                                <div className="done_popup">
                                    <div className="img_box">
                                        <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                                    </div>
                                    <div className="done_title">교환일기 생성 완료</div>
                        <div className="done_explains">
                            <div className="done_explain">{diaryID}님의 일기장이 다 만들어졌어요!</div>
                            <div className="done_explain">만들어진 일기장을 친구와 공유해보세요</div>
                        </div>
                        <div className="img_box">
                            <img src={require('../../img/Diarys/done_envelope.png')} alt="envelope" className="envelope_img"/>
                        </div>
                        <div className="invitation">
                                <div className="invitation_explain">
                                    <div className="invitation_title">친구를 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대하기</span> 위해서,</div>
                                    {/*<div className="absolute">*/}
                                    {/*    */}
                                    {/*</div>*/}
                                    <div className="invitation_text">초대 코드를 친구에게 공유해주세요.</div>
                                    <div style={{display: "flex", alignItems:"center", gap: "20px", marginTop:"20px"}}>
                                        <button id="kakaotalk-sharing-btn" onClick={onClickShareKakao} />
                                        <button className="copy_btn" onClick={handleCopy}>코드복사</button>
                                    </div>
                                    <input className="invitation_code" disabled="true" value={code} style={{display:"none"}}/>
                                </div>
                        </div>
                                    <div className="done_blank"></div>
                                    <div className="doneCancel_btn">
                                        <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                                    </div>
                                </div>
                    </>
                        ):(
                            <>
                    <div className="overlay" style={{height: "calc(var(--vh, 1vh) * 100"}}></div>
                                <div className="done_popup" style={{height: "calc(var(--vh, 1vh) * 100 - 30px"}}>
                                    <div className="img_box">
                                        <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                                    </div>
                                    <div className="done_title">교환일기 생성 완료</div>
                            <div className="done_explains">
                                <div className="done_explain">친구와의 일기장이 다 만들어졌어요!</div>
                                <div className="done_explain">히스토리 캐비닛에서 확인해보세요</div>
                            </div>
                            <div className="img_box" style={{marginTop: "34px"}}>
                                <img src={require('../../img/Diarys/done_envelope.png')} alt="envelope" className="envelope_img"/>
                            </div>
                            <div className="invitation">
                                <div className="invitation_explain">
                                    <div style={{height:"100px"}}></div>
                                    <button className="invitation_btn" onClick={() => window.location.replace('/history')}
                                            style={{width: "150px", height: "40px", marginTop: "-90px", fontWeight:"500"}}>히스토리 캐비닛으로</button>
                                </div>
                            </div>
                                    <div className="done_blank"></div>
                                    <div className="doneCancel_btn">
                                        <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                                    </div>
                                </div>
                    </>
                )}

        </div>
    );
};

export default CreateDiaryDone;