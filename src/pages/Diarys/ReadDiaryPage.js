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
    const [isEnd, setIsEnd] = useState(type === "history" || type === "deactivate" ? "history" : "read");


    const [sentData, setSentData] = useState([]);
    const [unsentData, setUnsentData] = useState([]);
    const [content, setContent] = useState({});

    async function getDiaryEntry(){
        const res = await getDiaryPage(diaryID);

        const sent = res.sent;
        const unsent = res.unsent;

        if (res === "fail") {
            alert("일기 조회 실패");
        } else {
            setSentData(sent);
            setUnsentData(unsent);
        }
    }

    useEffect(() => {
        getDiaryEntry();
    }, []);

    useEffect(() => {
        setContent(unsentData.length > 0 ? unsentData[0] :
            sentData.length > 0 ? sentData[sentData.length - 1] : {
            sendAt: `${new Date().toLocaleDateString()},${new Date().toTimeString().split(' ')[0]}`,
                content: "일기를 작성할 차례입니다."
        });
    }, [sentData, unsentData]);

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
            <ReadDiary type={searchParams.get("type")} date={content.sendAt} content={content.content} goSendDiary={goWriteOrSendDiary}/>
            {/*<BottomNav type={isEnd} goWriteDiary={goWriteOrSendDiary} showNextPage={showNextPage} showPrevPage={showPrevPage}/>*/}
        </div>
    );
};

export default ReadDiaryPage;
