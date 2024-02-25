import Header from "../../components/Header";
import ProfileEditor from "../../components/Settings/ProfileEditor";

const ProfileEditPage = () => {
    return (
        <div>
            <Header text="프로필 수정" type="cancel"/>
            <ProfileEditor />
        </div>
    )
}

export default ProfileEditPage;