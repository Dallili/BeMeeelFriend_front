import Header from "../../components/Header";
import NotifyList from "../../components/Main/NotifyList";

const NotifyPage = () => {
    return (
        <div className="notify">
            <Header text="알림" type="back"/>
            <NotifyList />
        </div>
    );
};

export default NotifyPage;