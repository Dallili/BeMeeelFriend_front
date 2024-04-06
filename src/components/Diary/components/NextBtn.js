import './NextBtn.scss';

const NextBtn = ({text, onClick, style}) => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
        }}>
            <button className="next_btn" onClick={onClick} style={style}>{text}</button>
        </div>
    );
};

export default NextBtn;