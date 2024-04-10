import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

import SplashScreen from "./components/SplashScreen";

import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/SignUp/SignupPage";
import Certification from "./components/SignUp/Certification";
import CodeCerification from "./components/SignUp/CodeCerification";
import IdPassword from "./components/SignUp/IdPassword";
import Profile from "./components/SignUp/Profile";
import Birthday from "./components/SignUp/Birthday";
import Rules from "./components/SignUp/Rules";
import Welcome from "./components/SignUp/Welcome";

import MainPage from "./pages/Main/MainPage";
import NotifyPage from "./pages/Main/NotifyPage";

import SettingsMenuPage from "./pages/Settings/SettingsMenuPage";
import InquiryPage from "./pages/Settings/InquiryPage";
import PasswordChangePage from "./pages/Settings/PasswordChangePage";
import ProfileEditPage from "./pages/Settings/ProfileEditPage";
import AnnouncementPage from "./pages/Settings/AnnouncementPage";
import AnnouncementList from "./components/Settings/AnnouncementList";
import AnnouncementDetailPage from "./pages/Settings/AnnouncementDetailPage";
import UserReportPage from "./pages/Settings/UserReportPage";
import UserGuidePage from "./pages/Settings/UserGuidePage";
import WithdrawalPage from "./pages/Settings/WithdrawalPage";

import CreateDiaryPage from "./pages/Diarys/CreateDiaryPage";
import NewDiary from "./components/Diary/NewDiary";
import WithFriendNewDiary from "./components/Diary/WithFriendNewDiary";
import WithStrangerNewDiary from "./components/Diary/WithStrangerNewDiary";
import DiaryColor from "./components/Diary/DiaryColor";

import HistoryCabinetPage from "./pages/Main/HistoryCabinetPage";
import DisabledDiaryPage from "./pages/Diarys/DisabledDiaryPage";
import DeleteDiaryPage from "./pages/Diarys/DeleteDiaryPage";
import ReadDiaryPage from "./pages/Diarys/ReadDiaryPage";
import WriteDiaryPage from "./pages/Diarys/WriteDiaryPage";
import SendDiaryPage from "./pages/Diarys/SendDiaryPage";
import EmotionReport from "./pages/Diarys/EmotionReport";
import PrivateRoute from "./router/PrivateRoute";


function App() {
    const [showSplash, setShowSplash] = useState(sessionStorage.getItem('splashShown'));


    useEffect(() => {
        if(showSplash === null) {
            const timer = setTimeout(()=> {
                setShowSplash('false');
                sessionStorage.setItem('splashShown', 'true');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showSplash]);

    function setScreenSize() {
        let vw = window.innerWidth * 0.01;
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
        setScreenSize();
        sessionStorage.setItem("userToken", "123");
    });

  return (
    <div className="App">
        {showSplash === null ? (
            <SplashScreen />
        ) : (
            <div className="AppBody">
                <Routes>
                    {/*로그인 페이지*/}
                    <Route path="/login" element={<LoginPage />}/>

                    {/*회원가입 페이지*/}
                    <Route path="/signup" element={<SignupPage />}>
                        <Route index="true" element={<Certification />} />
                        <Route path="verify" element={<CodeCerification />} />
                        <Route path="detail" element={<IdPassword />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="birthday" element={<Birthday />} />
                        <Route path="rules" element={<Rules />} />
                    </Route>
                    <Route path="/welcome" element={<Welcome />} />

                    <Route element={<PrivateRoute />}>
                        {/*메인 페이지: 메인 캐비넷*/}
                        <Route path="/" element={<MainPage />} />
                        {/*알림 페이지*/}
                        <Route path="/notify" element={<NotifyPage />} />
                        {/*일기장 생성*/}
                        <Route path="/newdiary" element={<CreateDiaryPage/>}>
                            <Route index="true" element={<NewDiary />} />
                            <Route path="friend" element={<WithFriendNewDiary/>} />
                            <Route path="new-friend" element={<WithStrangerNewDiary/>} />
                            <Route path="color" element={<DiaryColor/>} />
                        </Route>

                        <Route path="/deactivated-diary" element={<DisabledDiaryPage />} />
                        <Route path="/delete-diary" element={<DeleteDiaryPage />} />
                        <Route path="/read-diary/:diaryID" element={<ReadDiaryPage />} />
                        <Route path="/read-diary/:diaryID?type=history" element={<ReadDiaryPage />} />
                        <Route path="/read-diary/:diaryID?type=deactivated" element={<ReadDiaryPage />} />
                        <Route path="/write-diary/:diaryID" element={<WriteDiaryPage/>} />
                        <Route path="/send-diary/:diaryID" element={<SendDiaryPage/>} />
                        <Route path="/emotion-report" element={<EmotionReport />}/>

                        {/*히스토리 캐비넷*/}
                        <Route path="/history" element={<HistoryCabinetPage />} />

                        {/* 설정 페이지 */}
                        <Route path="/settings" element={<SettingsMenuPage />} />
                        <Route path="/settings/editprofile" element={<ProfileEditPage />}/>
                        <Route path="/settings/changepassword" element={<PasswordChangePage />}/>
                        <Route path="/settings/announcement" element={<AnnouncementPage />}>
                            <Route index="true" element={<AnnouncementList />} />
                            <Route path=":id" element={<AnnouncementDetailPage />} />
                        </Route>
                        <Route path="/settings/inquiry" element={<InquiryPage />} />
                        <Route path="/settings/guide" element={<UserGuidePage />}/>
                        <Route path="/settings/userreport" element={<UserReportPage />} />
                        <Route path="/settings/withdrawal" element={<WithdrawalPage />} />
                    </Route>
                </Routes>
            </div>
        )}
    </div>
  );
}

export default App;