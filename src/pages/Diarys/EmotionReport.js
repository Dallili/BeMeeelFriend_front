// import '../../components/Diary/DiaryDone.scss';
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";
import {getRecentFive, getShortReport} from "../../api/report";
import ReportGraph from "../../components/Diary/ReportGraph";
import './EmotionReport.scss';

const EmotionReport = () => {
    const {entryID} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const diaryID = searchParams.get("diaryID");

    const [name, setNickname] = useState("");
    const [emotion, setEmotion] = useState("");
    const [report, setReport] = useState("");

    const getInfo = async () => {
        const res = await getUserInfo();
        setNickname(res.nickname);
    };

    const shortReport = async () => {
        const res = await getShortReport(entryID);
        setReport(res.data.summary);
        setEmotion(res.data.sentiment);
    };

    const [graphData, setGraphData] = useState([]);

    const LongReport = async () =>{
        const res = await getRecentFive(diaryID);
        setGraphData(res.data);
    }

    useEffect(() => {
        getInfo();
        shortReport();
        LongReport();
    }, []);

    const getEmotion = () => {
        switch (emotion) {
            case '매우 부정':
                return '😟';
            case '약간 부정':
                return '🫤';
            case '보통':
                return '😐';
            case '약간 긍정':
                return '😊';
            case '매우 긍정':
                return '😄';
            default:
                return ;
        }
    }

    const goMain = () => window.location.replace("/");

    return (
        <div className="emotion_report">
            <div className="overlay"></div>
            <div className="done_popup">
                <div className="emotion_done_titles" style={{padding: "0 40px"}}>
                    <img src={require('../../img/Diarys/star.png')} alt="img" />
                    <div className="done_title_emotion">{name}</div>
                    <div className="done_title_emotion right">님의 오늘 일기는</div>
                </div>
                <div className="report_summary" style={{padding: "0 40px", wordBreak:"keep-all"}}>
                    <div className="emotion">{getEmotion()}</div>
                    <div className="done_explain">{report}</div>
                </div>
                <ReportGraph graphData={graphData}/>
                <div className="diary_blank"></div>
                <div className="diary_blank"></div>
                <div className="doneCancel_btn">
                    <img src={require('../../img/cancel_btn.png')} alt="cancel" className="cancel_btn" onClick={goMain}/>
                </div>
            </div>
        </div>
    );
};

export default EmotionReport;