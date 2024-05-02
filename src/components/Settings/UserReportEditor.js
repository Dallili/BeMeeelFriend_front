import './UserReporEditor.scss';
import './SettingsCommon.scss';
import SettingTextLabel from "./components/SettingTextLabel";
import LongButton from "../LongButton";
import {useEffect, useRef, useState} from "react";
import {getUserInfo} from "../../api/user";
import {getActivated} from "../../api/diary";
const UserReportEditor = () => {
    const fileUpload = useRef();
    const [fileUrl, setFileUrl]=useState("파일을 업로드하세요");
    const [nickName, setNickName] = useState("");
    const [other, setOther] = useState("");
    const [diaryName, setDiaryName] = useState([]);

    const getActivatedDiary = async () => {
        const res = await getActivated();
        const response = await getUserInfo();
        setNickName(response.nickname);

        if (res === "fail") {
            alert("일기장 불러오기 오류");
        } else {
            const diaries = res.diaries;
            setDiaryName(diaries.map((it) => it.memberName === response.nickname ? it.partnerName :  it.memberName));
        }
    };

    useEffect(() => {
        getActivatedDiary();
    }, []);


    const handleUploadClick = (e) => {
        fileUpload.current.click();
    };
    const handleUpload = (e) => {
        if (e.currentTarget.files?.[0]) {
            const fileName = fileUpload.current.value;
            const name= fileName.split('\\');
            setFileUrl(name[name.length-1]);
        }
    };

    const handleInput = (e) => {
        setOther(e.target.value);
    };

    const [radio, setRadio] = useState(0);
    const handleRadio = (e) => {
        setRadio(Number(e.target.value));
    };

    const selectList = ["심한 욕설 사용", "성희롱 발언", "인격 모독", "기타"];
    const [selected, setSelected] = useState("");
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div className="editor user_report" style={{
            paddingTop:"70px",
        }}>
            <SettingTextLabel text="신고 대상 별명" />
            <div className="selection">
                <select onChange={handleSelect} value={selected}>
                    <option disabled selected>신고할 유저를 선택하세요</option>
                    {diaryName.map((it) => (
                        <option className="option" value={it} key={it}>{it}</option>
                    ))}
                </select>
            </div>
            <SettingTextLabel text="신고 이유" />
            <div className="selection">
                <select onChange={handleSelect} value={selected}>
                    <option disabled selected>이유룰 선택하세요</option>
                    {selectList.map((it) => (
                        <option className="option" value={it} key={it}>{it}</option>
                    ))}
                </select>
            </div>
            { selected === "기타" &&
                <div className="input_container">
                    <input className="input_other" type="text" value={other} placeholder="기타 이유를 작성해주세요." onChange={handleInput}/>
                </div>
            }
            <SettingTextLabel text="파일 첨부" />
            <div className="btn_label">
                <img src={require('../../img/Settings/upload_btn.png')} alt="picUploadBtn" className="picUpload_btn" onClick={handleUploadClick}/>
                <div className="file_url">{fileUrl}</div>
                <input type="file" value="" ref={fileUpload} onChange={handleUpload} style={{ display: "none" }} />
            </div>
            <SettingTextLabel text="일기장 비활성화 선택" />
            <div className="radio_btns">
                <label><input onChange={handleRadio} value={0} type="radio" checked={radio === 0}/> 비활성화</label>
                <label><input onChange={handleRadio} value={1} type="radio" checked={radio === 1}/> 비활성화 안 함</label>
            </div>
            {/*<ToggleBtn />*/}
            <SettingTextLabel text="이용자 아이디"/>
            <div className="input_container">
                <input className="input_box" type="text" value={nickName} disabled="true" style={{backgroundColor: "#D3D3D3"}}/>
            </div>
            <div className="btn">
                <LongButton text="유저 신고하기" type="positive"/>
            </div>
        </div>
    );
};

export default UserReportEditor;