import Header from "../../components/Header";
import {Outlet} from "react-router-dom";

const CreateDiaryPage = () => {
    return (
        <div className="createDiary">
            <Header text="새로운 교환일기 생성" type="back"/>
            <Outlet />
        </div>
    );
};

export default CreateDiaryPage;