import './DiaryColor.scss';
import NextBtn from "./components/NextBtn";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const DiaryColor = () => {
    const diaryColors1 = ["#ffff3f", "#4CB", "#FFC4DD", "#FD1E1E", "#4E99DE"];
    const diaryColors2 = ["#D5D5D5", "#BE5108", "#4CB", "#ffff3f", "#4CB"];
    const [colors, setColors]= useState(diaryColors1);
    const [diaryColor, setDiaryColor] = useState(diaryColors1[0]);
    // const [currentClick, setCurrentClick] = useState();

    const clickNext = () => {
        if (JSON.stringify(colors) === JSON.stringify(diaryColors1)) {
            setColors(diaryColors2);
        } else {
            setColors(diaryColors1);
        }
    }

    const navigate = useNavigate();
    const goDone = () => navigate('/done');

    // 컬러 선택 시 하나만 테두리 표시
    // const colorClick = (e) => {
    //     setCurrentClick(e.target.id);
    // }
    //
    // useEffect((e) => {
    //     if (currentClick !== null) {
    //         const current = document.getElementById(currentClick);
    //         current.style.border = "solid black 3px";
    //     }
    //     if (prevClick !== null) {
    //         const prev = document.getElementById(prevClick);
    //         prev.style.border = '0';
    //     }
    //     setPrevClick(currentClick);
    //     }, [currentClick],);

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
                        {colors.map((it) =>
                            <div className="color"
                                 style={{
                                    backgroundColor:`${it}`,
                                 }}
                                 onClick={ () => setDiaryColor(it)}
                            />
                        )}
                    </div>
                    <button className="back_btn right_btn" onClick={clickNext}><img src={require('../../img/smallback_btn.png')} alt="backBtn" className="backImg"/></button>
                </div>
            </div>
            <NextBtn text="일기장 만들기" onClick={goDone} />
        </div>
    );
}

export default DiaryColor;