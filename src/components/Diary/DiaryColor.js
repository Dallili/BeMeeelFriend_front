import './DiaryColor.scss';
import NextBtn from "./components/NextBtn";
import {useEffect, useState} from "react";
import CreateDiaryDone from "./CreateDiaryDone";
import {useOutletContext} from "react-router-dom";
import {createDiary} from "../../api/diary";

const DiaryColor = () => {
    const diaryColors1 = ["#ffff3f", "#4CB", "#FFC4DD", "#FD1E1E", "#4E99DE"];
    const diaryColors2 = ["#D5D5D5", "#BE5108", "#4CB", "#ffff3f", "#4CB"];
    const {color, setColor} = useOutletContext();
    const [colors, setColors]= useState(diaryColors1);
    const [diaryColor, setDiaryColor] = useState(diaryColors1[0]);
    const [currentClick, setCurrentClick] = useState(["0"]);
    const [prevClick, setPrevClick] = useState(["1"]);

    const [diaryID, setDiaryID] = useState();
    const clickNext = () => {
        if (JSON.stringify(colors) === JSON.stringify(diaryColors1)) {
            setColors(diaryColors2);
        } else {
            setColors(diaryColors1);
        }
    }

    const [diaryDone, setDiaryDone]= useState("");

    const createNewDiary = async () => {
        const succeed = await createDiary({
            userID: sessionStorage.getItem("userID"),
            color: diaryColor
        });

        if(!succeed){
            setDiaryID(succeed.diaryID);
            showDiaryDone();
        }
    };

    const showDiaryDone = () => {
        setDiaryDone("me");
    };

    // useEffect(() => {
    //     if (currentClick !== null) {
    //         const current = document.getElementById(currentClick[0]);
    //         current.style.border = "solid black 3px";
    //     }
    //     if (prevClick !== null) {
    //         const prev = document.getElementById(prevClick[0]);
    //         prev.style.border = "none";
    //     }
    //     const unselected = currentClick.splice(0, 1);
    //     setPrevClick([...prevClick, unselected]);
    //     }, [currentClick, prevClick]);

    return (
        <div className="diary_color">
            <div className="instruction">만들어질 일기장의 겉표지 색상을 선택해주세요!</div>
            <div className="color_choice">
                <div className="diary">
                    <div className="square" style={{
                        backgroundColor:`${diaryColor}`,
                    }}></div>
                </div>
                <div className="palette">
                    <button className="back_btn" onClick={clickNext}><img src={require('../../img/smallback_btn.png')} alt="backBtn" className="back_img"/></button>
                    <div className="colors">
                        {colors.map((it, i) =>
                            <div className="color"
                                 style={{
                                    backgroundColor:`${it}`,
                                 }}
                                 id={i}
                                 onClick={() => {
                                     setDiaryColor(it);
                                     setCurrentClick([...currentClick, `${i}`]);
                                     setColor(it);
                                 }}
                            />
                        )}
                    </div>
                    <button className="back_btn right_btn" onClick={clickNext}><img src={require('../../img/smallback_btn.png')} alt="backBtn" className="backImg"/></button>
                </div>
            </div>
            <NextBtn text="일기장 만들기" onClick={createNewDiary} />
            { diaryDone !== "" && <CreateDiaryDone who={diaryDone} diaryID={diaryID} color={diaryColor}/>}
        </div>
    );
}

export default DiaryColor;