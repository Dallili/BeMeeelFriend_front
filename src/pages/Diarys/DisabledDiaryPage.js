import Header from "../../components/Header";
import DeactivatedDiary from "../../components/Diary/DeactivatedDiary";
import BottomNav from "../../components/BottomNav";
import {getDeactivated} from "../../api/diary";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";

const DisabledDiaryPage = () => {
    const [response, setResponse] = useState([]);
    const [total, setTotal] = useState(1);
    const [diaryColor, setDiaryColor] = useState([""]);
    const [userName, setUserName] = useState([""]);
    const getDeactivatedDiary = async () => {
        const res = await getDeactivated();
        const response = await getUserInfo();

        if (res === "fail") {
            alert("일기장 조회 실패");
            window.location.replace("/history");
        } else {
            const diary = res.diaries;
            const num = res.total;
            setResponse(diary);
            setDiaryColor(diary.map((it) => it.color.slice(1, -1)));
            setUserName(diary.map((it) => it.memberName === response.nickname ? it.partnerName :  it.memberName));
            setTotal(num);
        }
    };

    useEffect(() => {
        getDeactivatedDiary();
    }, []);

    return (
        <div className="disabledDiary">
            <Header type="back" text="비활성화 일기장 관리" />
            <DeactivatedDiary diarys={response} diaryNum={total} username={userName} diaryColor={diaryColor}/>
            <BottomNav />
        </div>
    );
};

export default DisabledDiaryPage;