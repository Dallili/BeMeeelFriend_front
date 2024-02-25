import Header from "../../components/Header";
import {Outlet} from "react-router-dom";

const SignupPage = () => {
    return (
        <div className="signupPage">
            <Header type="back" style={{
                borderBottom: "none",
            }}/>
            <Outlet />
        </div>
    );
};

export default SignupPage;