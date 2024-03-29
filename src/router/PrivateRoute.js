import {Redirect, Route} from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {props =>
                localStorage.getItem('user_id')?(
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                            pathname: '',
                            state: {from: props.location}
                        }}
                    />
                )}
        />
    );
};

export default PrivateRoute;