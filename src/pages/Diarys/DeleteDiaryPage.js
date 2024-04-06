import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import DeleteDiary from "../../components/Diary/DeleteDiary";
import {useEffect, useMemo, useState} from "react";

const DeleteDiaryPage = () => {
    const [selectedNum, setSelectedNum] = useState(0);
    const [allSelect, setAllSelect] = useState("전체 선택");
    const [isAllClicked, setIsAllClicked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const selectAll = () => {
        if (isAllClicked === false) {
            setAllSelect("선택 해제");
            setIsAllClicked(true);
        }  else {
            setAllSelect("전체 선택");
            setIsAllClicked(false);
        }
    }

    const yesDelete = () => {
        if (selectedNum > 0) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }
    const noDelete = () => setIsClicked(false);

    return (
        <div className="deleteDiary">
            <Header text="일기장 선택" type="delete" onClick={yesDelete}/>
            <DeleteDiary isAllClicked={isAllClicked} setSelectedNum={setSelectedNum} selectedNum={selectedNum} allSelect={allSelect} isClicked={isClicked} onClick={noDelete}/>
            <BottomNav type="delete" num={selectedNum} onClick={selectAll} allSelect={allSelect}/>
        </div>
    );
};

export default DeleteDiaryPage;