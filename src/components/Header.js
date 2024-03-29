import './Header.scss';
import {useNavigate} from "react-router-dom";

const Header = ({text, type, style}) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="header" style={style}>
            { type === "back" ? (
                <div className="back">
                    <div className="btn_container">
                        <img src={require('../img/back_btn.png')} alt="backBtn" className="backBtn_img" onClick={goBack}/>
                    </div>
                    <div className="text">{text}</div>
                    <div className="right_blank"></div>
                </div>
                ) : (
                <div className="cancel">
                    <div className="left_blank"></div>
                    <div className="text">{text}</div>
                    <div className="btn_container">
                        <img src={require('../img/cancel_btn.png')} alt="cancelBtn" className="cancelBtn_img" onClick={goBack}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;