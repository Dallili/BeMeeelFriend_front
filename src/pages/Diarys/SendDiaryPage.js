import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";
import SendDiary from "../../components/Diary/SendDiary";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getDiaryPage, sendDiaryPage} from "../../api/entry";


const SendDiaryPage = () => {
    const [sendDiary, setSendDiary] = useState(false);
    const navigate = useNavigate();
    const {diaryID} = useParams();

    const [unsentData, setUnsentData] = useState([]);
    // 일기 데이터 가져옴
    const getDiaryEntry = async () => {
        const res = await getDiaryPage(diaryID);
        if (res !== "fail") {
            setUnsentData(res.unsent);
        }
    }

    useEffect(() => {
        getDiaryEntry();
    }, []);

    const [content, setContent] = useState(unsentData[0]);

    const goWriteDiary = () => navigate(`/write-diary/${diaryID}`);

    const handleSendDiary = async () => {
        const res = await sendDiaryPage(content.entryID);
        if (res !== "fail") {
            setSendDiary(true);
        }
    };

    const date = new Date().toLocaleDateString();

    return(
        <div className="sendDiary">
            <Header type="back" style={{backgroundColor:"#ffb4aa", border:"none"}}/>
            <SendDiary date={date} content={content.content} sendDiary={sendDiary}/>
            <BottomNav type="send" setSendDiary={handleSendDiary} goWriteDiary={goWriteDiary} />
        </div>
    );
};

export default SendDiaryPage;