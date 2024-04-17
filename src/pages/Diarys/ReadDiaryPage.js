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
    const type = (searchParams.get("type") === "history" || searchParams.get("type") === "deactivated") ? "history" : "main";
    const [pageNum, setPageNum] = useState(0);
    const [isEnd, setIsEnd] = useState(type === "history" || type === "deactivate" ? "history" : "read");


    // const [sentData, setSentData] = useState([]);
    const [unsentData, setUnsentData] = useState([]);

    const init = [{
        sendAt: `${new Date().toLocaleDateString()},${new Date().toTimeString().split(' ')[0]}`,
        content: "일기를 작성할 차례입니다."
    }];

    const [content, setContent] = useState(init);

    async function getDiaryEntry(){
        const res = await getDiaryPage(diaryID);

        if (res === "fail") {
            alert("일기 조회 실패");
        } else {
            const sent = res.sent;
            const unsent = res.unsent;
            const unsent1 = [{...res.unsent, sendAt: res.unsent.date}];
            let total;
            let initTotal;
            if (unsent.length === 0){
                initTotal = [...sent, ...init];
            } else {
                total = [...sent, ...unsent1];
            }
            setUnsentData(unsent);

            console.log(total)
            console.log(initTotal)

            // 작성한 일기 없음
            if (unsent.length === 0 && type !== "history") {
                setContent(initTotal);
                if (sent.length === 0) {
                    setIsEnd("hiddenAndWrite");
                    setPageNum(initTotal.length - 1);
                } else {
                    setPageNum(initTotal.length - 2);
                }
            } else {
                // 작성한 일기 있음
                setContent(total);
                setPageNum(total.length -1);
                if (sent.length === 0) {
                    setIsEnd("hiddenAndWrite");
                }
            }
            console.log(content)
            console.log(pageNum)
        }
    }

    useEffect(() => {
        getDiaryEntry();
    }, []);


    const showNextPage = () => {
        if (pageNum < content.length) {
            setPageNum(() => pageNum + 1);
        }
    };

    const showPrevPage = () => {
        if (pageNum > 0) {
            setPageNum(() => pageNum - 1);
        }
    };

    useEffect(() => {
        if (pageNum === 0) {
            setIsEnd("hidden");
        } else if (pageNum === content.length -1) {
            if (type === "history") {
                setIsEnd("history");
            } else {
                setIsEnd("end");
            }
        } else {
            setIsEnd("read");
        }
    }, [pageNum]);

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
            <Header type="backMain" style={{backgroundColor:"#ffb4aa", border:"none"}}/>
            <ReadDiary type={searchParams.get("type")} date={content[pageNum].sendAt} content={content[pageNum].content} goSendDiary={goWriteOrSendDiary}/>
            <BottomNav type={isEnd} goWriteDiary={goWriteOrSendDiary} showNextPage={showNextPage} showPrevPage={showPrevPage}/>
        </div>
    );
};

export default ReadDiaryPage;
