import './DiaryColor.scss';
import NextBtn from "./components/NextBtn";
import {useEffect, useState} from "react";
import CreateDiaryDone from "./CreateDiaryDone";
import {createDiary} from "../../api/diary";
import {getUserInfo} from "../../api/user";

const DiaryColor = () => {
    // 원래 색깔, 서버에 넘겨 줘야 함
    const diaryColors1Origin = ["#f8c600", "#4E99DE", "#FD1E1E", "#5108be","#4CB"];
    const diaryColors2Origin = ["#D5D5D5", "#BE5108", "#E0F4D4FF", "#ff851f", "#1AFFF9FF"];

    // 선택지에 보이는 색깔
    const diaryColors1 = ["#fcfdde", "#dee7f5", "#f6d4d2",  "#d8cdee", "#E2F2EFFF"];
    const diaryColors2 = ["#D5D5D5", "#ebdacf", "#E0F4D4FF", "#ecb6ac", "#e6fcfb"];

    // 컬러 팔레트에 놓을 배열
    const [colors, setColors]= useState(diaryColors1);

    // 실제 다이어리 색깔
    const [diaryColor, setDiaryColor] = useState({
        array: diaryColors1Origin,
        color: 2
    });

    const [currentArr, setCurrentArr] = useState(diaryColors1Origin[2]);
    const [prevClick, setPrevClick] = useState("1");

    const [diaryID, setDiaryID] = useState('');

    const clickNext = () => {
        if (JSON.stringify(colors) === JSON.stringify(diaryColors1)) {
            setColors(diaryColors2);
            setDiaryColor({
                ...diaryColor,
                array: diaryColors2Origin
            });
        } else {
            setColors(diaryColors1);
            setDiaryColor({
                ...diaryColor,
                array: diaryColors1Origin
            });
        }
    }

    // 색깔 선택 시 검정 테두리
    useEffect(() => {
        const current = document.getElementById(diaryColor.color);
        // current.style.border = "solid black 2px";
        if (diaryColors2Origin.includes(currentArr) && JSON.stringify(colors) === JSON.stringify(diaryColors2)){
            current.style.border = "solid black 2px";
        } else if (diaryColors1Origin.includes(currentArr) && JSON.stringify(colors) === JSON.stringify(diaryColors1)) {
            current.style.border = "solid black 2px";
        } else {
            current.style.border = "none";
        }

        if (prevClick !== null) {
            const prev = document.getElementById(prevClick);
            prev.style.border = "none";
        }

    }, [diaryColor, prevClick, currentArr, colors]);

    const [diaryDone, setDiaryDone]= useState("");
    const [code, setCode] = useState("");

    const createNewDiary = async () => {
        const succeed = await createDiary(currentArr.substring(1));
        const user = await getUserInfo();

        if(succeed !== "fail"){
            setCode(succeed.code);
            setDiaryID(user.nickname);
            showDiaryDone();
        }
    };

    const showDiaryDone = () => {
        setDiaryDone("me");
    };

    return (
        <div className="diary_color">
            <div className="instruction">만들어질 일기장의 겉표지 색상을 선택해주세요!</div>
            <div className="color_choice">
                <div className="diary">
                    <div className="diary_bg">
                        <img src={require('../../img/Main/book_mask.png')} alt="bg" className="fill" style={{filter:`opacity(.7) drop-shadow(0 0 0 ${currentArr}`}}/>
                        <div className="diary_line">
                            <img src={require('../../img/Main/book_line.png')} alt="diary" className="line" />
                        </div>
                    </div>
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
                                 onClick={()=> {
                                     setPrevClick(diaryColor.color);
                                     setDiaryColor({
                                         ...diaryColor,
                                         color: i
                                     });
                                     setCurrentArr(diaryColor.array[i]);
                                 }}
                            />
                        )}
                    </div>
                    <button className="back_btn right_btn" onClick={clickNext}><img src={require('../../img/smallback_btn.png')} alt="backBtn" className="backImg"/></button>
                </div>
            </div>
            <NextBtn text="일기장 만들기" onClick={createNewDiary} />
            { diaryDone !== "" && <CreateDiaryDone who={diaryDone} diaryID={diaryID} code={code}/>}
        </div>
    );
}

export default DiaryColor;