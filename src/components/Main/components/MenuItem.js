import './MenuItem.scss';

const MenuItem = ({title, item, onClick}) => {
    return (
        <div className="memu_item">
            <button className="sandwichMenu_btn" onClick={onClick}>
                <img src={require(`../../../img/Main/${item}.png`)} alt="menuBtn.png" className="menuBtn_img" />
                {title}
            </button>
        </div>
    );
};

export default MenuItem;

