import ReadDiary from "../../components/Diary/ReadDiary";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {getDiaryPage} from "../../api/entry";

const ReadDiaryPage = () => {
    const navigate = useNavigate();
    const {diaryID} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const type = (searchParams.get("type") === "history" || searchParams.get("type") === "deactivated") ? "history": "main";
    const [unsentData, setUnsentData] = useState([]);

    // 일기 읽기에서 기본으로 가장 최근 일기 내용 보여줌
    const [pageNum, setPageNum] = useState(0);
    const [isEnd, setIsEnd] = useState(type === "history" || type === "deactivate" ? "history" : "end");
    const [content, setContent] = useState([{
        sendAt: " ",
        content: "",
        entryID: -1
    }]);

    const today = new Date();
    const year = today.toLocaleDateString('en-US', {
        year: 'numeric',
    });
    const month = today.toLocaleDateString('en-US', {
        month: '2-digit',
    });
    const day = today.toLocaleDateString('en-US', {
        day: '2-digit',
    });
    const finalToday = `${year}-${month}-${day}`;

    async function getDiaryEntry() {
        const res = await getDiaryPage(diaryID);
        try {
            if (res === "fail") {
                alert("조회 실패")
            } else {
                const sent = res.sent;
                const unsent = res.unsent;
                setUnsentData(unsent);
                if (type === "history") {
                    if (sent.length === 0) {
                        setContent([...sent, {
                            "sendAt": `${finalToday},${new Date().toTimeString().split(' ')[0]}`,
                            "content": "아직 주고 받은 일기가 없습니다.",
                            "entryID": -1
                        }])
                        setPageNum(0);
                    } else {
                        setContent([...sent]);
                        setPageNum(sent.length - 1);
                    }
                } else if (unsent.length > 0) {
                    const unsent = {
                        ...res.unsent[0],
                        "sendAt": res.unsent[0].updatedAt
                    };
                    setContent([...sent, unsent]);
                    setPageNum(sent.length);
                } else if (sent.length > 0) {
                    setContent([...sent, {
                        "sendAt": `${finalToday},${new Date().toTimeString().split(' ')[0]}`,
                        "content": "일기를 작성할 차례입니다.",
                        "entryID": -1
                    }]);
                    setPageNum(sent.length - 1);
                } else {
                    setContent([{
                        "sendAt": `${finalToday},${new Date().toTimeString().split(' ')[0]}`,
                        "content": "일기를 작성할 차례입니다.",
                        "entryID": -1
                    }]);
                }
            }
        } catch (e){
            console.log(e);
        }
    }

    useEffect( () => {
        getDiaryEntry();
    }, []);

    useEffect(() => {
        if (pageNum !== content.length - 1 && pageNum === 0) {
            setIsEnd("hidden");
        } else {
            setIsEnd("read");
        }
        if (type === "history"){
            if (pageNum === content.length - 1) {
                if (pageNum === 0) {
                    setIsEnd("");
                } else {
                    setIsEnd("history");
                }
            }
        } else {
            if (pageNum === content.length - 1) {
                if (pageNum === 0) {
                    if (pageNum === content.length -1) {
                        setIsEnd("hiddenAndWrite");
                    } else {
                        setIsEnd("hidden");
                    }
                }
                else {
                    setIsEnd("end");
                }
            }
        }
    }, [pageNum, content]);

    const showNextPage = () => {
        if (pageNum !== content.length - 1) {
            setPageNum(pageNum + 1);
        }
    };

    const showPrevPage = () =>  {
        if ( pageNum > 0 ) {
            setPageNum(pageNum - 1);
        }
    };

    const goWriteOrSendDiary = () => {
        // 기존에 작성해 둔 일기가 있으면
        if (unsentData.length > 0) {
            navigate(`/send-diary/${diaryID}`);
        } else {
            // 없으면
            navigate(`/write-diary/${diaryID}`);
        }
    };

    return (
        <div className="readDiary">
            <Header type={type === "history" ? "backHis" :"backMain"} style={{backgroundColor:"#ffb4aa", border:"none"}}/>
            <ReadDiary type={searchParams.get("type")} date={content[pageNum].sendAt} content={content[pageNum].content} entryID={content[pageNum].entryID} writerName={content[pageNum].writerName} goSendDiary={goWriteOrSendDiary}/>
            <BottomNav type={isEnd} goWriteDiary={goWriteOrSendDiary} showNextPage={showNextPage} showPrevPage={showPrevPage}/>
        </div>
    );
};

export default ReadDiaryPage;
