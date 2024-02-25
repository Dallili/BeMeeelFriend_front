import './Modal.scss'
import ShortButton from "./ShortButton";

const Modal = ({message, close, btnText, confirm}) => {
    return (
        <>
        <div className="overlay"></div>
        <div className="modal">
            <div className="modalCancel_btn">
                <img onClick={close} src={require('../img/cancel_btn.png')} alt="cancelBtn" className="modalCancel_img" />
            </div>
            <div className="modal_text">{message}</div>
            <div className="modal_btn">
                <ShortButton
                    text={btnText}
                    type="negative"
                    onClick={confirm}
                />
            </div>
        </div>
        </>
    );
};

export default Modal;