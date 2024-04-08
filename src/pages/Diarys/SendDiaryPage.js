import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import SendDiary from "../../components/Diary/SendDiary";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDiaryPageData} from "../../api/diaryData";
import {sendDiaryPage} from "../../api/diary";


const SendDiaryPage = () => {
    const [sendDiary, setSendDiary] = useState(false);
    const navigate = useNavigate();
    const {diaryID} = useParams();

    // 일기 데이터 가져옴
    const { unsentData } = getDiaryPageData(diaryID);
    const [content, setContent] = useState(unsentData[0]);

    const goWriteDiary = () => navigate(`/write-diary/${diaryID}`);
    const handleSendDiary = () => {
        sendDiaryPage(content.entryID, setSendDiary);
    };

    return(
        <div className="sendDiary">
            <Header type="back" style={{backgroundColor:"#FFACA3", border:"none"}}/>
            <SendDiary date={content.date} content={content.content} sendDiary={sendDiary}/>
            <BottomNav type="send" setSendDiary={setSendDiary} goWriteDiary={goWriteDiary} />
            {/*<BottomNav type="send" setSendDiary={handleSendDiary} goWriteDiary={goWriteDiary} />*/}
        </div>
    );
};

export default SendDiaryPage;