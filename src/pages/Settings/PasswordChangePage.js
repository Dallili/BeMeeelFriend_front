import Header from "../../components/Header";
import PasswordChangeEditor from "../../components/Settings/PasswordChangeEditor";


const PasswordChangePage = () => {
    return (
        <div>
            <Header text="비밀번호 변경" type="cancel"/>
            <PasswordChangeEditor />
        </div>
    );
};

export default PasswordChangePage;