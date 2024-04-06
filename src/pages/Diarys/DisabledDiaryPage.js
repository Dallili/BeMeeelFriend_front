import Header from "../../components/Header";
import DeactivatedDiary from "../../components/Diary/DeactivatedDiary";
import BottomNav from "../../components/BottomNav";

const DisabledDiaryPage = () => {
    return (
        <div className="disabledDiary">
            <Header type="back" text="비활성화 일기장 관리" />
            <DeactivatedDiary />
            <BottomNav />
        </div>
    );
};

export default DisabledDiaryPage;