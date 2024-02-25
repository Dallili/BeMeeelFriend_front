import Header from "../../components/Header";
import WithdrawalEditor from "../../components/Settings/WithdrawalEditor";

const WithdrawalPage = () => {
    return (
        <div className="withdrawal">
            <Header text="회원 탈퇴" type="cancel"/>
            <WithdrawalEditor />
        </div>
    );
};

export default WithdrawalPage;