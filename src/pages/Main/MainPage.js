import './MainPage.scss';
import useModal from "../../hooks/useModal";
import SandwichMenu from "../../components/Main/SandwichMenu";

const MainPage = () => {
    const clicked = () => {
        console.log("누름");
    };

    const {isOpen, open, close} = useModal();

    return (
        <div className="main">
            <div className="sandwich_btn" onClick={open}>
                <img src={require('../../img/Main/sandwich_btn.png')} alt="sandwichBtn" className="sandwich" />
            </div>
            {isOpen && <SandwichMenu menuClose={close}/>}
            <div className="diarys">
                <button className="diary_btn" onClick={clicked}>
                    <img src={require('../../img/Main/book_line.png')} alt="diary" className="diary_img" />
                </button>
            </div>
            <div className="hourglass">

            </div>
            <div className="bag">

            </div>
        </div>
    );
};

export default MainPage;