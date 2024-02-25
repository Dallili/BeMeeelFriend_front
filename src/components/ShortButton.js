import './ShortButton.scss';

const ShortButton = ({text, type, onClick}) => {
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return (
        <button
            className={["short_btn", `short_btn_${btnType}`].join(" ")}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ShortButton;