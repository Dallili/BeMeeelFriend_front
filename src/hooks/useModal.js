import {useState} from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const yes = () => {
        setIsModalOpen(true);
    };

    const no = () => {
        setIsModalOpen(false);
    };

    return {isOpen, open, close, isModalOpen, yes, no};
};

export default useModal;