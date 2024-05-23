import {Navigate, Outlet, useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const isLogin = !!sessionStorage.getItem("userToken");

const PrivateRoute = () => {
    const location = useLocation();
    const {pathname} = location;
    console.log(pathname)
    const [searchParams, setSearchParmas] = useSearchParams();

    useEffect(() => {
        if (!isLogin && pathname === "/newdiary/register-code") {
            sessionStorage.setItem("code", searchParams.get("value"));
        }
    }, []);

    return (
        isLogin ? <Outlet/> : <Navigate to="/login" />
    )
};

export default PrivateRoute;