import {useState} from "react";

// const OPTION = {
//     show: false,
//     title: "",
//     onSubmit: () => {},
//     onClose: () => {},
//     element: null
// }

const useModal = () => {
    const [isOpen, setIsOPen] = useState(false);
    const open = () => {
        setIsOPen(true);
    };
    const close = () => {
        setIsOPen(false);
    };

    return {isOpen, open, close};
};

export default useModal;