import './LongButton.scss';
import {useState} from "react";

const LongButton = ({text, type, onClick, isDisabled, style}) => {
    const btnType = ["positive", "negative", "login", "disabled"].includes(type) ? type : "default";

    return (
        <>
        { isDisabled === "true" ?
            <button
                className={["long_btn", `long_btn_${btnType}`].join(" ")}
                onClick={onClick}
                disabled={true}
                style={style}
            >
                {text}
            </button>
        :
            <button
                className={["long_btn", `long_btn_${btnType}`].join(" ")}
                onClick={onClick}
                style={style}
            >
                {text}
            </button>
        }
        </>
    );
};

export default LongButton;