import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import DeleteDiary from "../../components/Diary/DeleteDiary";
import {useEffect, useState} from "react";
import {deleteDiary, getDeactivated} from "../../api/diary";
import {useParams} from "react-router-dom";

const DeleteDiaryPage = () => {
    const {diaryID} = useParams();
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

    const [response, setResponse] = useState([]);
    const [total, setTotal] = useState(1);
    const [diaryColor, setDiaryColor] = useState([""]);
    const [userName, setUserName] = useState([""]);

    const getDeactivatedDiary = async () => {
        const res = await getDeactivated();

        if (res === "fail") {
            alert("일기장 조회 실패");
            window.location.replace("/history");
        } else {
            const diary = res.diaries;
            const num = res.total;
            setResponse(diary);
            setDiaryColor(diary.map((it) => it.color.slice(1, -1)));
            setUserName(diary.map((it) => it.memberName === response.nickname ? it.partnerName :  it.memberName));
            setTotal(num);
        }
    };

    useEffect(() => {
        getDeactivatedDiary();
    }, []);

    return (
        <div className="deleteDiary">
            <Header text="일기장 선택" type="delete" onClick={yesDelete}/>
            <DeleteDiary diarys={response} diaryNum={total} isAllClicked={isAllClicked} setSelectedNum={setSelectedNum} selectedNum={selectedNum} allSelect={allSelect} isClicked={isClicked} onClick={noDelete} diaryColor={diaryColor} username={userName}/>
            <BottomNav type="delete" num={selectedNum} onClick={selectAll} allSelect={allSelect}/>
        </div>
    );
};

export default DeleteDiaryPage;