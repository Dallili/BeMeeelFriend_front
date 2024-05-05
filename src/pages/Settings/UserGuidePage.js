import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './UserGuide.scss';
import Header from "../../components/Header";

const UserGuidePage = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState("1");

    return (
        <>
        <Header type="back" text="이용 방법 안내"/>
        <div className="howToUse">
            {page === "1"
                ?
                <div className="img_container">
                    <img className="htu_img" style={{display: "flex", height: "calc(var(--vh, 1vh) * 100 - 70px)"}} src={require('../../img/Settings/userguide1.png')} alt="img"/>
                    <div className="arrow arrow_right" onClick={()=>setPage("2")}>
                        <img className="arrow_img" alt="arrow" src={require('../../img/Settings/arrow.png')}/>
                        <label>다음으로</label>
                    </div>
                    {/*<div className="index">메인 캐비닛</div>*/}
                </div>
                : <div className="img_container">
                    <img className="htu_img" style={{display: "flex", height: "calc(var(--vh, 1vh) * 100 - 70px)"}} src={require('../../img/Settings/userguide2.png')} alt="img"/>
                    <div className="arrow arrow_left" onClick={()=>setPage("1")}>
                        <img className="arrow_img reverse" alt="arrow" src={require('../../img/Settings/arrow.png')}/>
                        <label>이전으로</label>
                    </div>
                    {/*<div className="index index_color">히스토리 캐비닛</div>*/}
                </div>
            }
        </div>
        </>
    );
};

export default UserGuidePage;