import './SettingsItem.scss'
import {useState} from "react";

const SettingsItem = ({type, itemName, onClick}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        type === "disabled" ? (
            <button disabled={true} className="button">{itemName}</button>
            ) : (
            <button
                className={isHovering ? "change" : "button"}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={onClick}
                style={{
                    cursor:"pointer",
                }}
            >
                {itemName}
            </button>
        )
    )
}

export default SettingsItem;