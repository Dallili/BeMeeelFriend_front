import Header from "../../components/Header";
import WriteDiary from "../../components/Diary/WriteDiary";
import BottomNav from "../../components/BottomNav";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDiaryPage, postDiary, putDiary} from "../../api/entry";

const WriteDiaryPage = () => {
    const navigate = useNavigate();
    const {diaryID} = useParams();
    const [allDelete, setAllDelete] = useState(false);
    // const [changeBg, setChangeBg] = useState(false);

    const [unsentData, setUnsentData] = useState([]);

    const [content, setContent] = useState({
        diaryID: diaryID,
        date: new Date().toLocaleDateString(),
        content: ""
    });

    const [isNew, setIsNew] = useState(true);

    const getDiaryEntry = async () => {
        try {
            const res = await getDiaryPage(diaryID);
            if (res.unsent.length > 0) {
                setUnsentData(res.unsent);
                setContent(res.unsent[0]);
                setIsNew(false);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getDiaryEntry();
    }, []);

    const onCreate = async () => {
        const res = await postDiary({
            diaryID: diaryID,
            content: content.content
        });
        if (res === "fail") {
            alert("일기 저장 실패");
        } else {
            navigate(`/send-diary/${diaryID}`);
        }
    };

    const onUpdate = async () => {
        const res = await putDiary({
            entryID: unsentData[0].entryID,
            content: content.content
        }, unsentData[0].entryID);
        if (res === "fail") {
            alert("일기 저장 실패");
        } else {
            navigate(`/send-diary/${diaryID}`);
        }
    };

    // 새 일기를 작성하거나 임시 저장된 일기 수정 후 저장하거나
    const onSubmit = () => {
        if (unsentData.length <= 0) {
            onCreate();
        } else {
            onUpdate();
        }
    };

    useEffect(() => {
        if (unsentData) {
            setIsNew(false);
        }
    }, [unsentData]);

    return (
        <div className="writeDiary">
            <Header type="backMain" style={{backgroundColor:"#ffb4aa", border:"none"}}/>
            <WriteDiary type="write" isNew={isNew} allDelete={allDelete} setAllDelete={setAllDelete} content={content} setContent={setContent}/>
            <BottomNav type="write" setAllDelete={setAllDelete} onSubmit={onSubmit}/>
        </div>
    );
};

export default WriteDiaryPage;