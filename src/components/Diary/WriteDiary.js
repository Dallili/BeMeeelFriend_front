import './ReadDiary.scss';
import '../Modal.scss';
import {useEffect} from "react";
import useModal from "../../hooks/useModal";
import DiaryModal from "./DiaryModal";
import {useNavigate, useParams} from "react-router-dom";
import {deactivateDiary} from "../../api/diary";

const WriteDiary = ({isNew, allDelete, setAllDelete, content, setContent}) => {
    // 배경 선택 모달 상태 관리
    // const {isOpen, open, close} = useModal();
    // const [choice, setChoice] = useState();
    const navigate = useNavigate();
    // 비활성화 모달 상태 관리
    const {isModalOpen, yes, no} = useModal();

    // 일기 쓰기
    const date = new Date().toLocaleDateString();

    const {diaryID} = useParams();

    const onDeactivate = async () => {
        await deactivateDiary(diaryID);
    };

    useEffect(() => {
        // 작성한 일기 내용 초기화
        if (allDelete === true) {
            reset();
        }
        // // 저장된 일기가 없다면 배경 선택 모달 띄우기
        // if (isNew === true){
        //     open();
        // }

        // // 속지 변경
        // if (changeBg === true) {
        //     open();
        // }
    }, [isNew, allDelete]);

    // const selectBackground = () => {
    //     close();
    //     setIsNew(false);
    //     setChangeBg(false);
    // };

    // const onClickBg = (e) => {
    //     setChoice(e.target.id);
    // };

    const reset = () => {
        setContent({
            date: content.date,
            content: ""
        });
        setAllDelete(false);
    };

    const diaryContent = (e) => {
        setContent({
            ...content,
            content: e.target.value,
        });
    };

    return (
        <div className="write_diary">
            <div className="indexes">
                <div className="index left" onClick={() => navigate(`/read-diary/${diaryID}`)}>일기 보기</div>
                <div className="index center index_clicked" onClick={() => navigate(`/send-diary/${diaryID}`)}>일기 교환</div>
                <div className="index right" onClick={yes}>비활성화</div>
            </div>
            <div className="date_box">
                <img src={require('../../img/Diarys/calendar_icon.png')} alt="icon"/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div className="date">{date}</div>
                    <div className="time" style={{visibility:"hidden"}}>time</div>
                </div>
            </div>
            <div className="diaryInput_box">
                <textarea className="diary_input" onChange={diaryContent} value={content.content}/>
            </div>
            {/*{ ((type === "write" && isNew && isOpen) || (isOpen && changeBg)) && (*/}
            {/*    <>*/}
            {/*        <div className="overlay"></div>*/}
            {/*        <div className="modal">*/}
            {/*            <div className="modal_texts">*/}
            {/*                <div className="modal_text_big" style={{marginTop:"10px"}}>배경 선택</div>*/}
            {/*                <div className="background_choice">*/}
            {/*                    <div className="background" id="1st" onClick={onClickBg} style={{backgroundColor: "#FFF2F2",border: choice === "1st" ? '#FE614C solid 1px' : 'none'}}></div>*/}
            {/*                    <div className="background" id="2nd" onClick={onClickBg} style={{border: choice === "2nd" ? '#FE614C solid 1px' : 'none'}}></div>*/}
            {/*                    <div className="background" id="3rd" onClick={onClickBg} style={{border: choice === "3rd" ? '#FE614C solid 1px' : 'none'}}></div>*/}
            {/*                    <div className="background" id="4th" onClick={onClickBg} style={{border: choice === "4th" ? '#FE614C solid 1px' : 'none'}}></div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="modal_btn">*/}
            {/*                <ShortButton text="완료" type="positive" onClick={selectBackground} />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </>*/}
            {/*)}*/}
            {isModalOpen && <DiaryModal onClick={no} onClick2={onDeactivate} text1="해당 일기장을 비활성화 하시겠습니까?" text2="비활성화한 일기장은" text3="다시 복구할 수 없습니다." btn="비활성화" />}
        </div>
    );
};

export default WriteDiary;