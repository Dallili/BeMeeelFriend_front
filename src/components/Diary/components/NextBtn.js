const NextBtn = ({text, onClick}) => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
        }}>
            <button onClick={onClick} style={{
                width:"215px",
                height:"56px",
                border:"none",
                borderRadius:"25px",
                color:"white",
                fontFamily:"'Noto Sans KR', sans-serif",
                fontSize:"16px",
                fontWeight:"600",
                backgroundColor:"#FF8B7B",
                filter:"drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.15))",
            }}>{text}</button>
        </div>
    );
};

export default NextBtn;