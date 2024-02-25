import Header from "../../components/Header";
import UserReportEditor from "../../components/Settings/UserReportEditor";

const UserReportPage = () => {
    return (
        <div className="userReport">
            <Header text="유저 신고" type="cancel" />
            <UserReportEditor />
        </div>
    );
};

export default UserReportPage;