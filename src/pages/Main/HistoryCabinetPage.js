import './MainPage.scss';
import useModal from "../../hooks/useModal";
import SandwichMenu from "../../components/Main/SandwichMenu";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DiaryPreparing from "../../components/Diary/DiaryPreparing";
import {getActivated} from "../../api/diary";
import {getUserInfo} from "../../api/user";
import NotifyModal from "../../components/Main/NotifyModal";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {notifyArrivalState, notifyArrivalStateSelector} from "../../recoil/atoms/notifyState";

const HistoryCabinetPage = () => {
    const navigate = useNavigate();

    const {isOpen, open, close} = useModal();
    const {isModalOpen, yes, no} = useModal();

    const [diary, setDiary] = useState([]);
    const [diaryColor, setDiaryColor] = useState([]);
    const [diaryPrepare, setDiaryPrepare] = useState(false);
    const [diaryID, setDiaryID] = useState("");

    const clicked = () => {
        yes();
    };
    const goMain = () => navigate('/');
    const goAllDiaries = () => navigate('/deactivated-diary');

    const [name, setNickname] = useState("");
    const [gender, setGender] = useState("");

    const [num, setNum] = useState(0);
    const [diaryName, setDiaryName] = useState([]);
    const [matchingID, setMatchingID] = useState();

    const getInfo = async () => {
        const res = await getUserInfo();
        const diaryNum = await getActivated();
        setNickname(res.nickname);
        setGender(res.gender);
        if (diaryNum.total === null) {
            setNum(0);
        } else {
            setNum(diaryNum.total);
        }
    }

    const getActivatedDiary = async () => {
        const res = await getActivated();
        const response = await getUserInfo();

        if (res === "fail") {
            alert("일기장 불러오기 오류");
        } else {
            const diaries = res.diaries;
            const known = res.unmatchedKnownDiaries;
            const unMatched = res.unmatchedUnknownDiaries;
            const total = [...diaries, ...unMatched, ...known];
            const tempTotal = [...diaries, ...unMatched];
            const tempColor = tempTotal.map((it) => it.color)
            const otherColor = known.map((it) => it.color.slice(1, -1));
            setDiary(total);
            setDiaryColor([...otherColor, ...tempColor]);
            setDiaryName(total.map((it) => it.memberName === response.nickname ? it.partnerName :  it.memberName));
        }
    };

    useEffect(() => {
        getInfo();
        getActivatedDiary();
    }, []);

    const notifyArrive = useRecoilValue(notifyArrivalState);
    const notifyCheck = useSetRecoilState(notifyArrivalStateSelector);

    return (
        <div className="historyCabinet">
            <div className="item_box">
                <div className="sandwich_btn" onClick={open}>
                    <img src={require('../../img/Main/sandwich_btn.png')} alt="sandwichBtn" className="sandwich" />
                </div>
                {isOpen && <SandwichMenu menuClose={close} name={name} num={num}/>}
                <div className="diarys">
                    {diary.length === 1 ? (
                        <div className="diary_bg" onClick={clicked}>
                            <img  src={require('../../img/Main/book_mask.png')} alt="bg" className="fill" style={{filter:`opacity(.6) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line">
                                <img src={require('../../img/Main/book_line.png')} alt="diary" className="line" />
                            </div>
                        </div>
                    ): diary.length === 2 ? (
                        <div className="diary_bg diaries" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask0.png')} alt="bg" className="fill0" style={{filter:`opacity(.7) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line" style={{paddingTop:"33px", paddingLeft:"12px"}}>
                                <img src={require('../../img/Main/book_line0.png')} alt="diary" className="line line0" />
                                <div className="diary_line">
                                    <img src={require('../../img/Main/book_mask1.png')} alt="bg" className="fill1" style={{filter:`opacity(.8) drop-shadow(0 0 0 ${diaryColor[1]}`}}/>
                                    <div className="diary_line">
                                        <img src={require('../../img/Main/book_line1.png')} alt="diary" className="line line1" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ): diary.length === 3 ? (
                        <div className="diary_bg diaries" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask0.png')} alt="bg" className="fill0" style={{filter:`opacity(.7) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line" style={{paddingTop:"33px", paddingLeft:"12px"}}>
                                <img src={require('../../img/Main/book_line0.png')} alt="diary" className="line line0" />
                                <div className="diary_line">
                                    <img src={require('../../img/Main/book_mask1.png')} alt="bg" className="fill1" style={{filter:`opacity(.7) drop-shadow(0 0 0 ${diaryColor[1]}`}}/>
                                    <div className="diary_line">
                                        <img src={require('../../img/Main/book_line1.png')} alt="diary" className="line line1" />
                                        <div className="diary_line" style={{marginTop:"-120px", paddingLeft:"20px"}}>
                                            <img src={require('../../img/Main/book_mask.png')} alt="bg" className="fill fill2" style={{filter:`opacity(.8) drop-shadow(0 0 0 ${diaryColor[2]}`}}/>
                                            <div className="diary_line" onClick={clicked}>
                                                <img src={require('../../img/Main/book_line.png')} alt="diary" className="line line2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className="diary_bg">
                        </div>
                    )}
                </div>
                <div className="hourglass">
                    <div className="item_btn goHome_btn" onClick={goMain}>
                        Home
                    </div>
                </div>
                <div className="bag">
                    <div className="item_btn" onClick={goAllDiaries}>
                        All<br />Diaries
                    </div>
                </div>
                {isModalOpen === true && (
                    <>
                        <div className="overlay" onClick={no}></div>
                        <div className="modal diarySelect_modal">
                            <div className="modal_text">일기장 선택</div>
                            {diary.map((it, index) => (
                                <div key={index} className="diary_select"
                                     onClick={
                                    diary[index].partnerID === null || diary[index].diaryID === null ?
                                    diary[index].diaryID === null ?
                                        () => {no(); setDiaryPrepare(true); setMatchingID(diary[index].matchingID)}
                                        : () => {no(); setDiaryPrepare(true); setDiaryID(diary[index].diaryID)}
                                    : ()=> navigate(`/read-diary/${diary[index].diaryID}?type=history`)}>
                                    {diary[index].partnerID === null || diary[index].matchingID ? "준비중" : diaryName[index]}
                                </div>
                            ))}
                            <div className="close_btn" onClick={no}>닫기</div>
                        </div>
                    </>
                )}
                { diaryPrepare && matchingID && <DiaryPreparing who="stranger" matchingID={matchingID}/>}
                { diaryPrepare && diaryID && <DiaryPreparing diaryID={diaryID} name={name}/>}
                {notifyArrive === true && (
                    <NotifyModal onClick={notifyCheck}/>
                )}
            </div>
        </div>
    );
};

export default HistoryCabinetPage;