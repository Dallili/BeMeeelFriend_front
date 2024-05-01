import {Navigate, Outlet} from "react-router-dom";

const isLogin = sessionStorage.getItem("userToken");

const PublicRoute = () => {
    return (
        isLogin ? <Navigate to="/" /> : <Outlet/>
    )
};

export default PublicRoute;