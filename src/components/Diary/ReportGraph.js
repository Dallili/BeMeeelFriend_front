import './ReportGraph.scss';
import {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";
const ReportGraph = ({graphData}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const newList = graphData.map((it, idx) => {
            switch (it.sentiment) {
                case '매우 부정':
                    return {
                        ...it,
                        sentiment: 1,
                        emotion: '😟',
                    };
                case '약간 부정':
                    return {
                        ...it,
                        sentiment: 2,
                        emotion: '🫤'
                    };
                case '보통':
                    return {
                        ...it,
                        sentiment: 3,
                        emotion: '😐'
                    };
                case '약간 긍정':
                    return {
                        ...it,
                        sentiment: 4,
                        emotion: '😊'
                    };
                case '매우 긍정':
                    return {
                        ...it,
                        sentiment: 5,
                        emotion: '😄'
                    };
                default:
                    return 1;
            }
        })
        setList(newList);
    }, [graphData]);

    const remainStick = () => {
        const newArr = [];
        for(let i =0;i<5-list.length;i++) {
            newArr.push(<div className="stick"></div>)
        }
        return newArr;
    };

    const [clicked, setClicked] = useState('');

    const onClick = (e) => {
        setClicked(e.target.id);
    }

    const handleMouseOver = (e) => {
        setClicked(e.target.id);
    }

    const handleMouseOut = () => {
        setClicked('false');
    }

    useEffect(() => {
        console.log(clicked)
        if(clicked === 'false') {
            list.map((it, idx) => document.getElementsByClassName(`${idx}`)[0].style.cssText = 'visibility: hidden');
        }else if(clicked){
            const list = ['0', '1', '2', '3', '4'];
            const notClicked= list.filter((it)=> it !== clicked)
            console.log(notClicked)
            notClicked && notClicked.map((it) => document.getElementsByClassName(`${clicked}`)[0].style.cssText = 'visibility: hidden');
            document.getElementsByClassName(`${clicked}`)[0].style.visibility = 'visible';
        }
    }, [clicked]);

    return(
        <div className="report_graph">
            <div className="text_label">최근 일기 5개의 감정 데이터</div>
            <div className="chart">
                {list.slice(0).reverse().map((it, idx) =>
                    <div className="stick" id={idx} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={idx} onClick={onClick}>
                        <div className="percent" id={idx} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor:`${it.color}`, height:`calc(${it.sentiment} * 64px)`}}>
                            <div className={["date", ` ${idx}`].join('')}>{it.emotion + it.date}</div>
                        </div>
                    </div>
                )}
                {list.length < 5 && remainStick()}
            </div>
        </div>
    );
};

export default ReportGraph;

