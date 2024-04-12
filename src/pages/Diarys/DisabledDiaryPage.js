import Header from "../../components/Header";
import DeactivatedDiary from "../../components/Diary/DeactivatedDiary";
import BottomNav from "../../components/BottomNav";
import {getDeactivated} from "../../api/diary";
import {useEffect, useState} from "react";

const DisabledDiaryPage = () => {
    const [response, setResponse] = useState([]);
    const [total, setTotal] = useState(1);

    const getDeactivatedDiary = () => {
        // const res = await getDeactivated();
        // const diary = res.diaries;
        // const num = res.total;
        // setResponse(diary);
        // setTotal(num);

        const deactivatedDiaries = [
                {
                    "diaryID": "diary10",
                    "userID": "user10",
                    "partnerID": "user12",
                    "updatedBy": "new user",
                    "updatedAt": "2024-03-26 21:18:33",
                    "color": "#000000",
                    "activated": false
                }];
        setResponse(deactivatedDiaries);
    };

    useEffect(() => {
        getDeactivatedDiary();
    }, []);

    return (
        <div className="disabledDiary">
            <Header type="back" text="비활성화 일기장 관리" />
            <DeactivatedDiary diarys={response} diaryNum={total}/>
            <BottomNav />
        </div>
    );
};

export default DisabledDiaryPage;