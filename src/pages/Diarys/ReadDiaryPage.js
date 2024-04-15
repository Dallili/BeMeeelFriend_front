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
    const type = searchParams.get("type") === "history" || searchParams.get("type") === "deactivated" ? "history": "main";

    const [sentData, setSentData] = useState([]);
    const [unsentData, setUnsentData] = useState([]);

    // 일기 읽기에서 기본으로 가장 최근 일기 내용 보여줌
    const [pageNum, setPageNum] = useState(sentData.length > 0 ? sentData.length - 1 : -2);

    const [isEnd, setIsEnd] = useState(type === "history" || type === "deactivate" ? "history" : sentData.length > 0 ? "read" : "end");

    const [content, setContent] = useState(
        sentData.length > 0 ? sentData[pageNum] :
            unsentData.length > 0 ? {
            "entryID": unsentData[0].entryID,
            "sendAt": unsentData[0].date,
            "content": unsentData[0].content
        } : {
            "sendAt": new Date().toLocaleDateString(),
            "content": "일기를 작성할 차례입니다."
    });

    const getNextContent = (currentPage, sentData, unsentData) => {
        if (currentPage === sentData.length - 1 || sentData.length === 0) {
            if (unsentData.length > 0) {
                return {
                    "entryID": unsentData[0].entryID,
                    "sendAt": unsentData[0].date,
                    "content": unsentData[0].content
                };
            } else {
                return {
                    "entryID": sentData[sentData.length - 1].entryID + 1,
                    "sendAt": new Date().toLocaleDateString(),
                    "content": "일기를 작성할 차례입니다."
                };
            }
        } else {
            return sentData[currentPage + 1];
        }
    };

    const showNextPage = () => {
        if ( pageNum === sentData.length-1 || sentData.length === 0 ) {
            setPageNum(sentData.length);
            setIsEnd("end");
            getNextContent(pageNum, sentData, unsentData);
        } else {
            setPageNum(pageNum + 1);
            setContent(sentData[pageNum + 1]);
        }
    };

    const showPrevPage = () =>  {
        if ( pageNum > -1 ) {
            if ( pageNum === 0 ) {
                setIsEnd("hidden");
            } else {
                setPageNum(pageNum - 1);
                setContent(sentData[pageNum - 1]);
            }
        }
    };

    useEffect(() => {
        if (pageNum > -1 && pageNum < sentData.length && !(isEnd === "history")) {
            setIsEnd("read");
        }
        if (pageNum === 0) {
            setIsEnd("hidden");
        }
        if (pageNum === -2) {
            setIsEnd("hiddenAndWrite");
        }
        if (pageNum === sentData.length-1 && (type === "history" || type === "deactivated") ){
            setIsEnd("history");
        }

    }, [pageNum]);

    const getDiaryEntry = async () => {
        const res = await getDiaryPage(diaryID);
        if (res !== "fail") {
            setSentData(res.sent);
            setUnsentData(res.unsent);
        }
    }

    useEffect(() => {
        getDiaryEntry();
    }, []);

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
            <Header type="back" style={{backgroundColor:"#ffb4aa", border:"none"}}/>
            <ReadDiary type={searchParams.get("type")} date={content.sendAt} content={content.content} goSendDiary={goWriteOrSendDiary}/>
            <BottomNav type={isEnd} goWriteDiary={goWriteOrSendDiary} showNextPage={showNextPage} showPrevPage={showPrevPage}/>
        </div>
    );
};

export default ReadDiaryPage;
