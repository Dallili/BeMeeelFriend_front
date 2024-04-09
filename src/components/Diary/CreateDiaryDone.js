import './DiaryDone.scss';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getMatchingCode, patchMatchingCode} from "../../api/matching";

const CreateDiaryDone = ({who, stranger, diaryID, color}) => {
    const navigate = useNavigate();
    const [invitationCode, setInvitationCode] = useState("");

    //유저 초대코드 받아와서 설정
    // const myInvitationCode = "AFD#@RSFDJSFL@LFDS";
    let myCode;
    useEffect(() => {
        myCode = async () => {
            await getMatchingCode(diaryID, {
                userID: sessionStorage.getItem("userID"),
                color: color
            });
        }
    }, []);

    const onInputHandler = (e) => {
        setInvitationCode(e.target.value);
    };

    const goMain = () => navigate('/');

    const sendMatchingCode = async () => {
        const result = await patchMatchingCode({
            code: invitationCode,
            userID: sessionStorage.getItem("userID")
        })
        if (result === true){
            goMain();
        }

    };


    return (
        <div className="createDiaryDone">
            <div className="overlay"></div>

            <div className="done_popup">
                <div className="img_box">
                    <img src={require('../../img/Diarys/done_confetti.png')} alt="confetti" className="confetti_img"/>
                </div>
                <div className="done_title">교환일기 생성 완료</div>
                <div className="done_explains">
                    <div className="done_explain">일기장이 다 만들어졌어요!</div>
                    <div className="done_explain">이제 만들어진 일기장을 친구와 공유해보세요</div>
                </div>
                { stranger === true ? (
                    <div className="img_box">
                        <img src={require('../../img/Diarys/done_stranger.png')} alt="done" className="done_img" />
                    </div>
                ): (
                    <>
                        <div className="img_box">
                            <img src={require('../../img/Diarys/done_envelope.png')} alt="envelope" className="envelope_img"/>
                        </div>
                        <div className="invitation">
                            { who === "me" ? (
                                <div className="invitation_explain">
                                    <div className="invitation_title">친구를 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대하기</span> 위해서,</div>
                                    <div className="invitation_text">아래의 초대 코드를 친구에게 공유해주세요.</div>
                                    <input className="invitation_code" disabled="true" value={myCode} />
                                    <button className="invitation_btn">복사</button>
                                </div>
                            ):(
                                <div className="invitation_explain">
                                    <div className="invitation_title">친구에게 <span style={{color:"#227573", textDecoration:"#FC715F 5px underline"}}>초대를 받았다면</span>,</div>
                                    <div className="invitation_text">공유받은 초대코드를 아래 입력란에 제출해주세요.</div>
                                    <input className="invitation_input" onChange={onInputHandler}/>
                                    <button className="invitation_btn" onClick={sendMatchingCode}>제촐</button>
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