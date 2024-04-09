import Header from "../../components/Header";
import WriteDiary from "../../components/Diary/WriteDiary";
import BottomNav from "../../components/BottomNav";
import {useEffect, useReducer, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {postDiary, putDiary} from "../../api/entry";
import {getDiaryPageData, reducer} from "../../api/diaryData";

const WriteDiaryPage = () => {
    const navigate = useNavigate();
    const {diaryID} = useParams();
    const [saveDiary ,setSaveDiary] = useState(false);
    const [allDelete, setAllDelete] = useState(false);
    const [changeBg, setChangeBg] = useState(false);

    const {unsentData} = getDiaryPageData(diaryID);
    const [isNew, setIsNew] = useState(unsentData.length <= 0);

    const [content, setContent] = useState(unsentData.length <= 0 ? {
        diaryID: diaryID,
        date: new Date().toLocaleDateString(),
        content: " "
    }: unsentData[0]);

    const onCreate = (content) => {
        postDiary({
            "diaryID": diaryID,
            "writer": "user1",
            "content": content.content
        });
    };

    const onUpdate = (content) => {
        putDiary({
            "entryID": unsentData[0].entryID,
            "content": content.content
        }, unsentData[0].entryID);
    };

    // 새 일기를 작성하거나 임시 저장된 일기 수정 후 저장하거나
    const onSubmit = () => {
        if (isNew) {
            onCreate(content);
        } else {
            onUpdate(content);
        }
        navigate(`/send-diary/${diaryID}`);
    };

    useEffect(() => {
        if (unsentData) {
            setIsNew(false);
        }
    }, [unsentData]);

    return (
        <div className="writeDiary">
            <Header type="back" style={{backgroundColor:"#FFACA3", border:"none"}}/>
            <WriteDiary type="write" isNew={isNew} setIsNew={setIsNew} allDelete={allDelete} setAllDelete={setAllDelete} setChangeBg={setChangeBg} changeBg={changeBg} content={content} setContent={setContent}/>
            <BottomNav type="write" setAllDelete={setAllDelete} setChangeBg={setChangeBg} setSaveDiary={setSaveDiary} onSubmit={onSubmit}/>
        </div>
    );
};

export default WriteDiaryPage;