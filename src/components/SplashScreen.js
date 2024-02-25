import './SplashScreen.scss';

const SplashScreen = () => {
    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => console.log(response.data))
    // }, [])

    return(
        <div className="splashScreen">
            <img src={require('../img/Logo_final.png')} alt="LogoImg" className="logo_img" />
            <div className="splash_text">비밀친구, 우리들의 교환일기</div>
        </div>
    );
};

export default SplashScreen;