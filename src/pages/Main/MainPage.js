import './MainPage.scss';
import '../../components/Modal.scss';
import useModal from "../../hooks/useModal";
import SandwichMenu from "../../components/Main/SandwichMenu";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getActivated, getDiary} from "../../api/diary";
import {getUserInfo} from "../../api/user";

const MainPage = () => {
    // 샌드위치 메뉴
    const {isOpen, open, close} = useModal();

    // 일기장 선택 모달
    const {isModalOpen, yes, no} = useModal();

    // 일기장 클릭시 일기장 선택 모달 열림
    const clicked = () => {
        yes();
    };

    const [diary, setDiary] = useState([]);
    const [diaryColor, setDiaryColor] = useState([]);
    const [diaryName, setDiaryName] = useState([]);

    const getMainDiary = async () => {
        const res = await getDiary();

        if (res === "fail") {
            alert("일기장 불러오기 오류");
        } else {
            const diaries = res.diaries;
            setDiary(diaries);
            setDiaryColor(diaries.map((it) => it.color.slice(1, -1)));
            setDiaryName(diaries.map((it) => it.memberName === name ? it.partnerName :  it.memberName ));
        }
    };

    const [name, setNickname] = useState("");
    const [gender, setGender] = useState("");

    const [num, setNum] = useState(0);

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

    useEffect(() => {
        getInfo();
        getMainDiary();
    }, []);

    const navigate = useNavigate();
    const goHistory = () => navigate('/history');

    return (
        <div className="main">
            <div className="item_box">
                <div className="sandwich_btn" onClick={open}>
                    <img src={require('../../img/Main/sandwich_btn.png')} alt="sandwichBtn" className="sandwich" />
                </div>
                {isOpen && <SandwichMenu menuClose={close} name={name} num={num}/>}
                <div className="diarys">
                    {diary && diary.length === 1 ? (
                        <div className="diary_bg" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask.png')} alt="bg" className="fill" style={{filter:`opacity(.6) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line">
                                <img src={require('../../img/Main/book_line.png')} alt="diary" className="line" />
                            </div>
                        </div>
                    ): diary && diary.length === 2 ? (
                        <div className="diary_bg diaries" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask0.png')} alt="bg" className="fill0" style={{filter:`opacity(.7) drop-shadow(0 0 0 ${diaryColor[1]}`}}/>
                            <div className="diary_line" style={{paddingTop:"33px", paddingLeft:"12px"}}>
                                <img src={require('../../img/Main/book_line0.png')} alt="diary" className="line line0" />
                                <div className="diary_line">
                                    <img src={require('../../img/Main/book_mask1.png')} alt="bg" className="fill1" style={{filter:`opacity(.8) drop-shadow(0 0 0 ${diaryColor[2]}`}}/>
                                    <div className="diary_line">
                                        <img src={require('../../img/Main/book_line1.png')} alt="diary" className="line line1" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ): diary && diary.length === 3 ? (
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
                    <div className="item_btn" onClick={goHistory}>
                        History
                    </div>
                </div>
                <div className="bag">
                </div>
                {isModalOpen === true && (
                    <>
                        <div className="overlay_diary" onClick={no}></div>
                        <div className="modal diarySelect_modal">
                            <div className="modal_text">일기장 선택</div>
                            {diary.map((it, index) => (
                                <div key={index} className="diary_select" onClick={()=> navigate(`/read-diary/${diary[index].diaryID}`)}>{diaryName[index]}</div>
                            ))}
                            <div className="close_btn" onClick={no}>닫기</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;