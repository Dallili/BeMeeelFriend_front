import './DeactivatedDiary.scss';
import '../Modal.scss';
import {useEffect, useState} from "react";
import DiaryModal from "./DiaryModal";
import {deleteDiary} from "../../api/diary";

const DeleteDiary = ({diarys, diaryNum, isAllClicked, setSelectedNum, selectedNum, allSelect, isClicked, onClick, diaryColor, username}) => {
    const [selectedDiaries, setSelectedDiaries] = useState([]);
    const [deleteReady, setDeleteReady] = useState(true);

    useEffect(() => {
        if (isAllClicked) {
            const array = diarys.map((_, i) => i);
            setSelectedDiaries(array);
            setSelectedNum(diaryNum);
            for(let i=0;i<array.length;i++) {
                const current = document.getElementById(array[i]);
                current.style.filter = "opacity(.8) drop-shadow(0 0 0 #000000)";
            }
        } else {
            setSelectedDiaries([]);
            setSelectedNum(0);
            for(let i=0;i<diarys.length;i++) {
                const current = document.getElementById(`${i}`);
                current.style.filter = `opacity(.6) drop-shadow(0 0 0 ${diaryColor[i]})`;
            }
        }
    }, [isAllClicked]);

    const onClickDiary = (diary) => {
        setSelectedDiaries(selectedDiaries => {
            if (selectedDiaries.includes(diary)) {
                return selectedDiaries.filter(item => item !== diary);
            } else {
                return [...selectedDiaries, diary];
            }
        });
        setSelectedNum(selectedNum => {
            if (selectedDiaries.includes(diary)) {
                return selectedNum - 1;
            } else {
                return selectedNum + 1;
            }
        });
    };

    const onDelete = async (diaryID) => {
        await deleteDiary(diaryID);
    };

    const onDeleteDiary = () => {
        selectedDiaries.map(async (it) => await onDelete(diarys[selectedDiaries[it]].diaryID));
        window.location.replace('/deactivated-diary');
    }

    // if( allSelect === true) {
    //     const array = [];
    //     diarys.forEach((el) => array.push(el))
    //     setCurrentClick(array);
    //     setSelectedNum(array.length);
    // }
    //
    // const onClickDiary = (e) => {
    //     if (currentClick.includes(e.target.id) === true) {
    //         if ( selectedNum > -1 ) {
    //             setSelectedNum(selectedNum - 1);
    //             const index = currentClick.indexOf(e.target.id);
    //             const unselected = currentClick.splice(index, 1);
    //             setPrevClick([...prevClick, unselected[0]]);
    //             setCurrentClick([...currentClick]);
    //         }
    //     } else {
    //         if (prevClick.includes(e.target.id) === true){
    //             const index = prevClick.indexOf(e.target.id);
    //             prevClick.splice(index, 1);
    //             setPrevClick([...prevClick]);
    //         }
    //         setSelectedNum(selectedNum + 1);
    //         setCurrentClick([
    //             ...currentClick,
    //             e.target.id
    //         ]);
    //     }
    // }
    //
    // useEffect(() => {
    //     if (currentClick !== null) {
    //         for(let i=0;i<currentClick.length;i++) {
    //             const current = document.getElementById(currentClick[i]);
    //             current.style.backgroundColor = "#FE614C";
    //         }
    //         setIsDisabled("#FE614C");
    //     }
    //     if (prevClick !== null) {
    //         for(let i=0;i<prevClick.length;i++) {
    //             const prev = document.getElementById(prevClick[i]);
    //             prev.style.backgroundColor = "#747474";
    //         }
    //     }
    // }, [currentClick, prevClick]);

    return (
        <div className="delete_diary">
            {diarys.map((diary, index) => (
                <div key={index} className="diary">
                    {/*<img src={require('../../img/diary_icon.svg')} alt="diary" className="diary_img"/>*/}
                    <div
                        className="square"
                        style={{ filter: selectedDiaries.includes(index) ? "opacity(.8) drop-shadow(0 0 0 #000000)" : `opacity(.6) drop-shadow(0 0 0 ${diaryColor[index]})`}}
                        id={`${index}`}
                        onClick={() => onClickDiary(index)}
                    />
                    <div
                        className="diary_text"
                        style={{ color: '#747474' }}
                        onClick={() => onClickDiary(index)}
                    >
                        {username[index]}
                    </div>
                </div>
            ))}
            {isClicked === true && selectedNum !== 0 && deleteReady === true &&
                <DiaryModal onClick={onClick} onClick2={onDeleteDiary} text1="일기장을 영구적으로 삭제하시겠습니까?" text2="삭제한 일기장은" text3="다시 복구할 수 없습니다." btn="삭제" />
            }
        </div>
    );
};

export default DeleteDiary;