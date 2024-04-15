import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const CreateDiaryPage = () => {
    const [newDiaryInfo, setNewDiaryInfo] = useState("");
    const [invite, setInvite] = useState("");
    const [color, setColor] = useState("");

    return (
        <div className="createDiary">
            <Header text="새로운 교환일기 생성" type="back"/>
            <Outlet context={{setNewDiaryInfo, setInvite, setColor, setKeyword, color}}/>
        </div>
    );
};

export default CreateDiaryPage;