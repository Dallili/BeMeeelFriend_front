import Header from "../../components/Header";
import InquiryEditor from "../../components/Settings/InquiryEditor";

const InquiryPage = () => {
    return (
        <div className="inquiry">
            <Header type="cancle" text="문의하기"/>
            <InquiryEditor />
        </div>
    );
};


export default InquiryPage;