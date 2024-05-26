import './Modal.scss'
import ShortButton from "./ShortButton";

const Modal = ({message, close, btnText, btnText2, confirm, type}) => {
    return (
        <>
        <div className="overlay overlay_diary"></div>
        <div className="modal">
            <div className="modalCancel_btn">
                <img onClick={close} src={require('../img/cancel_btn.png')} alt="cancelBtn" className="modalCancel_img" />
            </div>
            <div className="modal_text">{message}</div>
            { type === "twoBtn" ? (
                <div className="modal_btn">
                    <ShortButton text={btnText} onClick={close} type="negative" />
                    <ShortButton text={btnText2} onClick={confirm} type="positive" />
                </div>
                ) : (
                <div className="modal_btn">
                    <ShortButton
                        text={btnText}
                        type="negative"
                        onClick={confirm}
                    />
                </div>
                )
            }
        </div>
        </>
    );
};

export default Modal;