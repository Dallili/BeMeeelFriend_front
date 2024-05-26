import './Login.scss';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import LongButton from "../LongButton";
import {login} from "../../api/user";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {loginState} from "../../recoil/atoms/loginState";
import {kakaoShareState} from "../../recoil/atoms/KakaoShareState";

const Login = () => {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const setLogin = useSetRecoilState(loginState);

    const idInputHandler = (e) => {
        setId(e.target.value);
    }

    const pwInputHandler = (e) => {
        setPw(e.target.value);
    }


    // 로그인 버튼 클릭 시 서버로 아이디, 패스워드 전달
    const onClickLogin = async () => {
        const data= {
            email:`${id}`,
            password:`${pw}`
        }
        const res = await login(data);
        if (res !== "fail") {
            setLogin(res);
            const code =sessionStorage.getItem("code");
            sessionStorage.setItem("code", 'null');
            if (code && code !== 'null') {
                window.location.replace(`/newdiary/register-code?value=${code}`);
            } else {
                window.location.replace('/');
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            onClickLogin();
        }
    };

    const goSignUp = () => navigate('/signup');

    return (
        <div className="login">
            <div className="logo_box">
                <img src={require('../../img/Logo_final.png')} alt="LogoImg" className="loginLogo_img" />
            </div>
            <div className="text_box">
                <p>나의 비밀친구와</p>
                <p>이야기를 나눠보세요</p>
            </div>
            <div className="input_box">
                <input className="login_input" onChange={idInputHandler} type="text" placeholder="아이디"/>
                <input className="login_input" onChange={pwInputHandler} onKeyDown={handleEnter} type="password" placeholder="비밀번호"/>
            </div>
            <div className="login_btn">
                <LongButton onClick={onClickLogin} text="로그인 하기" type="login" />
            </div>
            <div className="login_s_btns">
                <button className="login_s_btn" onClick={goSignUp}>회원가입</button>
                <div style={{color:"white"}}>|</div>
                <button className="login_s_btn">ID 찾기</button>
                <div style={{color:"white"}}>|</div>
                <button className="login_s_btn">PW 찾기</button>
            </div>
        </div>
    );
};

export default Login;