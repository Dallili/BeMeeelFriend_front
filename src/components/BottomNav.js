import './BottomNav.scss';
import readBtn from '../img/read_nav_btn.svg';
import {useState} from "react";

const BottomNav = ({type, onClick, goWriteDiary, num, allSelect, setSendDiary, setAllDelete, setChangeBg, showNextPage, showPrevPage, setSaveDiary, onSubmit}) => {
    const reserveTime = ["지금", "30분 후", "1시간 후", "2시간 후", "3시간 후"];
    const [time, setTime] = useState("지금");
    return (
        <>
        { type === "delete" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn">{num}개 선택</div>
                    <div className="nav_btn" style={{color:"#FE614C", cursor:"pointer"}} onClick={onClick}>{allSelect}</div>
                </div>
            </div>
        ): type === "read" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn" onClick={showPrevPage}>
                        <img src={readBtn} alt="btn" className="read_btn"/>
                    </div>
                    <div className="nav_btn" onClick={showNextPage}>
                        <img src={readBtn} alt="btn" className="read_btn right"/>
                    </div>
                </div>
            </div>
        ): type === "hidden" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn" >
                        <img src={readBtn} alt="btn" className="read_btn" style={{visibility:"hidden"}}/>
                    </div>
                    <div className="nav_btn" onClick={showNextPage}>
                        <img src={readBtn} alt="btn" className="read_btn right"/>
                    </div>
                </div>
            </div>
        ) : type === "hiddenAndWrite" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn" onClick={showPrevPage}>
                        <img src={readBtn} alt="btn" className="read_btn" style={{visibility:"hidden"}}/>
                    </div>
                    <div className="nav_btn" onClick={showNextPage}>
                        <div className="write" onClick={goWriteDiary}>일기쓰기</div>
                    </div>
                </div>
            </div>
        ) : type === "history" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn" onClick={showPrevPage}>
                        <img src={readBtn} alt="btn" className="read_btn" />
                    </div>
                    <div className="nav_btn">
                        <img src={readBtn} alt="btn" className="read_btn right" style={{visibility:"hidden"}}/>
                    </div>
                </div>
            </div>
        ) : type === "end" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn" onClick={showPrevPage}>
                        <img src={readBtn} alt="btn" className="read_btn"/>
                    </div>
                    <div className="nav_btn">
                        <div className="write" onClick={goWriteDiary}>일기쓰기</div>
                    </div>
                </div>
            </div>
        ): type === "write" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn">
                        <div onClick={()=>{
                            setAllDelete(true);
                        }}>초기화</div>
                        {/*<div style={{width:"2px", height:"30px", margin:"-3px -3px 0 -3px", backgroundColor:"#D5D5D5"}}></div>*/}
                        {/*<div onClick={() => setChangeBg(true)}>속지 변경</div>*/}
                    </div>
                    <div className="nav_btn" style={{color:"#4D4D4D", fontWeight:"600"}} onClick={onSubmit}>저장하기</div>
                </div>
            </div>
        ): type === "send" ? (
            <div className="bottom_nav">
                <div className="nav_btns">
                    <div className="nav_btn">
                        <div onClick={goWriteDiary}>수정하기</div>
                    </div>
                    <div className="nav_btn" style={{color:"#4D4D4D", fontWeight:"600"}}>
                        {/*<select className="select_time" style={{visibility:"hidden"}}>*/}
                        {/*    {reserveTime.map((it, i) => (*/}
                        {/*        <option key={i} onClick={()=>setTime(`${it}`)}>{it}</option>*/}
                        {/*    ))}*/}
                        {/*</select>*/}
                        <div onClick={setSendDiary}>전달하기</div>
                    </div>
                </div>
            </div>
        ): (
            <div className="bottom_nav">
            </div>
        )}
        </>
    );
};

export default BottomNav;