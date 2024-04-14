import './WithSbNewDiary.scss';
import {useEffect, useState} from "react";
import NextBtn from "./components/NextBtn";
import CreateDiaryDone from "./CreateDiaryDone";
import DiaryPreparing from "./DiaryPreparing";
import {useOutletContext} from "react-router-dom";
import {postRandomMatching} from "../../api/matching";

const WithStrangerNewDiary = () => {
    const {setKeyword} = useOutletContext();
    const [selectedNum, setSelectedNum] = useState(0);
    const [currentClick, setCurrentClick] = useState([]);
    const [prevClick, setPrevClick] = useState([]);
    const interests = ["일상", "고민", "수다", "덕질", "음식", "드라마", "운동", "영화", "댄스", "게임", "공부", "시험", "취준", "학생", "직장인"];
    const [diaryDone, setDiaryDone] = useState("");

    const interestSelect = (e) => {
        if (currentClick.includes(e.target.id) === true) {
            if ( selectedNum > -1 ) {
                setSelectedNum(selectedNum - 1);
                const index = currentClick.indexOf(e.target.id);
                const unselected = currentClick.splice(index, 1);
                setPrevClick([...prevClick, unselected[0]]);
                setCurrentClick([...currentClick]);
            }
        } else {
            if ( selectedNum < 3) {
                if (prevClick.includes(e.target.id) === true) {
                    const index = prevClick.indexOf(e.target.id);
                    prevClick.splice(index, 1);
                    setPrevClick([...prevClick]);
                }
                setSelectedNum(selectedNum + 1);
                setCurrentClick([
                    ...currentClick,
                    e.target.id
                ]);
            }
        }
    }

    useEffect(() => {
        if (currentClick !== null) {
            for (let i=0;i<currentClick.length;i++){
                const current = document.getElementById(currentClick[i]);
                current.style.backgroundColor = "#FFD7D2";
                current.style.color = "#FE614C";
                current.textContent = `${i + 1}`;
            }
        }
        if (prevClick !== null) {
            for (let i=0;i<prevClick.length;i++) {
                const prev = document.getElementById(prevClick[i]);
                prev.style.backgroundColor = "white";
                prev.style.color = "black";
                prev.textContent = "";
            }
        }
    }, [currentClick, prevClick]);


    const sendRandomMatching = async () => {
        const result = await postRandomMatching({
            memberID: sessionStorage.getItem("userID"),
            createdAt: new Date().toLocaleTimeString(),
            firstInterest: currentClick[0],
            secondInterest: currentClick[1],
            thirdInterest: currentClick[2]
        });
        if(result === true) {
            showDiaryDone();
        } else {
            showDiaryDone();
        }

    };

    const showDiaryDone = () => {
        setKeyword(currentClick);
        setDiaryDone("stranger");
    };

    return (
        <div className="withStranger_newDiary">
            <div className="instruction">아래 목록에서 관심 키워드를 선택해주세요!</div>
            <div className="instruction_small">선택한 내용을 기반으로</div>
            <div className="instruction_small">함께 교환일기를 작성할 파트너를 매칭해드릴게요
                <div className="selected_num">{selectedNum}/3 (개)</div>
            </div>
            <div className="select_interests">
                <div className="interests">
                    {interests.map((it, i) =>
                        <div className="interest">
                            <div className="interest_circle" id={[`${i}`, "번"].join("")} onClick={interestSelect}></div>
                            <div className="interest_text" id={[`${i}`, "번"].join("")}>{it}</div>
                        </div>
                    )}
                </div>
            </div>
            { selectedNum === 3 ? (
                <NextBtn text="매칭 요청하기" onClick={sendRandomMatching}/>
            ):(
                <NextBtn style={{backgroundColor:"#dedede"}} text="매칭 요청하기" />
            )}
            { diaryDone !== "" && <CreateDiaryDone stranger={true}/>}
        </div>
    );
};

export default WithStrangerNewDiary;