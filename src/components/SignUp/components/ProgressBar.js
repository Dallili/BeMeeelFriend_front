import './ProgressBar.scss';

const ProgressBar = ({num}) => {
    return (
        <div className="progress">
            <img src={require(`../../../img/SignUp/progress_bar${num}.png`)} alt="progress" className="progress_bar" />
        </div>
    );
};

export default ProgressBar;