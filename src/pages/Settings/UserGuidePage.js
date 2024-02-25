const UserGuidePage = () => {
    return (
        <div className="howToUse"
             style={{
                 display:"flex",
                 placeContent:"center",
                 textAlign:"center",
             }}>
            <img src={require('../../img/Settings/userguide1.png')} alt="HTUImg" className="howToUse_img"
                 style={{
                     width:"100vw",
                     height:"100vh",
                 }}/>
        </div>
    );
};

export default UserGuidePage;