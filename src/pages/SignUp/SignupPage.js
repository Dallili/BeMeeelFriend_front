import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const SignupPage = () => {
    const [userInfo, setUserInfo] = useState({
        password:"",
        nickname:"",
        gender:"",
        birthday:"",
        email:""
    });

    return (
        <div className="signupPage">
            <Header type="back" style={{
                borderBottom: "none",
            }}/>
            <Outlet context={{userInfo, setUserInfo}}/>
        </div>
    );
};

export default SignupPage;