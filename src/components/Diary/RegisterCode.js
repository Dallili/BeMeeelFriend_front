import "./WithSbNewDiary.scss";
import CreateDiaryDone from "./CreateDiaryDone";
import {useEffect, useState} from "react";
import NextBtn from "./components/NextBtn";
import {patchMatchingCode} from "../../api/matching";
import sendDiaryDone from "./SendDiaryDone";
import {useSearchParams} from "react-router-dom";

const RegisterCode = () => {
    const [diaryDone, setDiaryDone]= useState("");
    const [invitationCode, setInvitationCode] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const [getCode, setCode] = useState(searchParams.get("value"));

    const showDiaryDone = () => {
        setDiaryDone("friend");
    };

    const onInputHandler = (e) => {
        setInvitationCode(e.target.value);
    };

    const sendMatchingCode = async () => {
        const res = await patchMatchingCode(invitationCode);

        if(res !== "fail") {
            showDiaryDone();
        }
    };

    useEffect(() => {
        setInvitationCode(getCode);
    }, [getCode]);

    return (
        <div className="register_code">
            <div className="instruction">
                친구에게 공유 받은 초대 코드를 입력해주세요.
            </div>
            <input className="invitation_input" value={invitationCode} onChange={onInputHandler}/>
            <div className="send_btn">
                {invitationCode ? (
                    <NextBtn text="제출하기" onClick={sendMatchingCode} />
                ): (
                    <NextBtn text="제출하기" style={{backgroundColor:"#dedede", cursor:"default"}} />
                )}
            </div>
            { diaryDone !== "" && <CreateDiaryDone who={diaryDone}/>}
        </div>
    );
};

export default RegisterCode;