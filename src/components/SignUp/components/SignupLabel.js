import './SignupLabel.scss';

const SignupLabel = ({text, style}) => {
    return (
        <div className="signup_label" style={style}>{text}</div>
    );
};

export default SignupLabel;