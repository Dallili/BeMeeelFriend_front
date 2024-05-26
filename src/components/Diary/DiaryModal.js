import ShortButton from "../ShortButton";
import '../Modal.scss';

const DiaryModal = ({onClick, onClick2, text1, text2, text3, btn}) => {
    return (
        <div className="diary_modal">
            <div className="overlay_diary"></div>
            <div className="modal">
                <div className="modalCancel_btn">
                    <img onClick={onClick} src={require('../../img/cancel_btn.png')} alt="cancelBtn" className="modalCancel_img" />
                </div>
                <div className="modal_texts">
                    <div className="modal_text_small" style={{marginBottom:"15px"}}>{text1}</div>
                    <div className="modal_text_small">{text2}</div>
                    <div className="modal_text_small">{text3}</div>
                </div>
                <div className="modal_two_btn">
                    <ShortButton text="취소" type="negative" onClick={onClick}/>
                    <ShortButton text={btn} onClick={onClick2} type="positive" />
                </div>
            </div>
        </div>
    );
};

export default DiaryModal;