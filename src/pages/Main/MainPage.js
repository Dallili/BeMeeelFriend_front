import './MainPage.scss';
import '../../components/Modal.scss';
import useModal from "../../hooks/useModal";
import SandwichMenu from "../../components/Main/SandwichMenu";
import {useNavigate, useParams} from "react-router-dom";
import {getMainDiary} from "../../api/diaryData";

const MainPage = () => {
    // 샌드위치 메뉴
    const {isOpen, open, close} = useModal();

    // 일기장 선택 모달
    const {isModalOpen, yes, no} = useModal();

    // 일기장 클릭시 일기장 선택 모달 열림
    const clicked = () => {
        yes();
    };

    const userID = "user12"

    const diary = getMainDiary(userID).diaries;


    const diaryColor = [diary.map((it, index) => diary[index].color)];


    const navigate = useNavigate();

    const goHistory = () => navigate('/history');

    return (
        <div className="main">
            <div className="item_box">
                <div className="sandwich_btn" onClick={open}>
                    <img src={require('../../img/Main/sandwich_btn.png')} alt="sandwichBtn" className="sandwich" />
                </div>
                {isOpen && <SandwichMenu menuClose={close}/>}
                <div className="diarys">
                    {diary.length === 1 ? (
                        <div className="diary_bg" onClick={clicked} style={{border:"solid"}}>
                            <img src={require('../../img/Main/book_mask.png')} alt="bg" className="fill" style={{filter:`opacity(.6) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line">
                                <img src={require('../../img/Main/book_line.png')} alt="diary" className="line" />
                            </div>
                        </div>
                    ): diary.length === 2 ? (
                        <div className="diary_bg" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask0.png')} alt="bg" className="fill0" style={{filter:`opacity(.4) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
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
                        <div className="diary_bg" onClick={clicked}>
                            <img src={require('../../img/Main/book_mask0.png')} alt="bg" className="fill0" style={{filter:`opacity(.5) drop-shadow(0 0 0 ${diaryColor[0]}`}}/>
                            <div className="diary_line" style={{paddingTop:"33px", paddingLeft:"12px"}}>
                                <img src={require('../../img/Main/book_line0.png')} alt="diary" className="line line0" />
                                <div className="diary_line">
                                    <img src={require('../../img/Main/book_mask1.png')} alt="bg" className="fill1" style={{filter:`opacity(.5) drop-shadow(0 0 0 ${diaryColor[1]}`}}/>
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
                                <div key={index} className="diary_select" onClick={()=> navigate(`/read-diary/${diary[index].diaryID}`)}>{diary[index].partnerID}</div>
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