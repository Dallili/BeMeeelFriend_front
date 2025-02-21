![소개이미지](https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/b5a1d63e-af26-4cb5-b5a6-8716fbdfeebb)


## 프로젝트 개요
**속마음을 담은 일기 교환을 통해 현대인의 소외감 해소를 돕는 교환일기 웹 서비스 <비밀친구>**<br>

💚 이화여대 컴퓨터공학전공 캡스톤 졸업프로젝트<br>
💚 개발 기간: 2024.02 ~ 2024.06

💬 우울증 환자가 증가하는 상황으로 특히 10대부터 20대까지의 우울감 및 소외감에 집중해서 이러한 사회적 문제를 해결하고자 프로젝트를 시작했다. SNS 시장 조사 결과 개인의 진솔한 이야기를 이끌어내는 소통창구가 될만한 서비스가 부재한 상황이라 판단했고 깊은 이야기를 나눌 수 있는 소통창구로서 교환일기 웹 서비스를 고안했다. 

💬 기존에 존재하는 일기 서비스와는 다르게 익명의 유저와 일기를 공유할 수 있는 랜덤 매칭 기능을 제공하며 사용자들이 작성한 일기에 대한 감정 분석 레포트를 제공한다.

## 팀원 소개
<table>
    <tr height="160px">
        <td align="center" width="200px">
            <a href="https://github.com/idon1nab"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/99960721?v=4"/></a>
            <br />
        </td>
        <td align="center" width="200px">
            <a href="https://github.com/rwaeng"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/80890092?v=4"/></a>
            <br />
        </td>
         <td align="center" width="200px">
            <a href="https://github.com/crHwang0822"><img height="150px" width="150px" src="https://avatars.githubusercontent.com/u/87927105?v=4"/></a>
            <br />
        </td>
    </tr>
    <tr height="60px">
        <td align="center">
        <a>🦝 곽민지</a><br>
          <span>백엔드</span><br>
            <a href="https://github.com/idon1nab">:octocat: GitHub</a>
            <br>
        </td>
        <td align="center">
        <a>🐸 조아령</a><br>
        <span>프론트엔드</span><br>
            <a href="https://github.com/rwaeng">:octocat: GitHub</a>
            <br />
        </td>
        <td align="center">
        <a>🦦 황채린 (팀장)</a><br>
        <span>백엔드</span><br>
            <a href="https://github.com/crHwang0822">:octocat: GitHub</a>
            <br />
         </td>
    </tr>
</table>

[백엔드 레포지토리 바로가기](https://github.com/Dallili/secretFriends-api)

## 배포 주소
🔗 https://secret-friends.link
<br>
<br>

**테스트 계정**<br>
```
heytwinkler@gmail.com
test123!
```

## 🚀 How to start
```
$ git clone https://github.com/Dallili/BeMeeelFriend_front.git
$ cd BeMeeelFriend_front
$ npm install
$ npm start
```

환경 변수 설정
```
// .env 
REACT_APP_SERVER_URL=서버 주소
REACT_APP_JAVASCRIPT_KEY=카카오톡 공유 키
```

## ⚙️ 기술 스택
**Environment**

<img src="https://img.shields.io/badge/intellij-000000?style=for-the-badge&logo=intellij idea&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

**Config**

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

**Development**
  
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"> 

**Deploy**

<img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=github actions&logoColor=white"> <img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazon s3&logoColor=white"> <img src="https://img.shields.io/badge/cloudfront-232F3E?style=for-the-badge&logo=amazon web services&logoColor=white"> <img src="https://img.shields.io/badge/route 53-8C4FFF?style=for-the-badge&logo=amazon route 53&logoColor=white"> 

## 주요 화면 및 기능
학창 시절, 사물함을 통해 교환일기를 주고받았던 경험에서 영감을 얻어 캐비닛 모양의 UI로 디자인

📍**메인 페이지** 
- 답장이 온 일기장을 확인하는 메인 캐비닛
- 교환 중인 모든 일기를 확인할 수 있는 히스토리 캐비닛<br>

| 메인 캐비닛 | 히스토리 캐비닛 |
|---|---|
|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/451172ab-37a9-4738-a0ef-8dc7aec511d3.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/64db1488-6124-4ef9-a4d8-9b5fa01551d4.png" width="200"/>|

📍 **일기장 생성**
- 지인 매칭: 사용자는 친구를 초대하거나 초대받아 새로운 일기장 생성 가능
- 랜덤 매칭: 매칭을 요청한 날짜와 사용자의 1, 2, 3순위 관심사를 기반으로 한 랜덤 매칭 알고리즘을 통해 익명의 사용자와 일기장 생성 가능<br>
  
|  | 1 | 2 | 3 | 4 | 매칭 대기|
|:-----:|---|---|---|---|---|
| 지인<br>매칭<br> (초대<br>하기) |<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/af220e9b-a4dc-4508-8e03-435b5d7645a8.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/39e41a31-1932-4cad-a9fe-746040e020cb.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/bbff05e1-0896-4bec-9254-e5a66bbc04da.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/e1c54300-4f18-41a1-965f-5955f52f2ff5.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/86c77cf1-3e1b-4754-ba70-29b22485e267.png" width="200"/>|
| 랜덤<br>매칭 |<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/ec62d71c-6bf4-45d6-8763-8493ba926c35.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/6dd48519-9905-4028-a2ed-8cfbd40e11e5.png" width="203"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/1a38d5b2-a5ea-4cd8-a175-fca5fcbc6c2d.png" width="200"/>||<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/e891a6f6-033f-4d5d-8ea2-de2e122c9025.png" width="200"/>|

📍 **일기 조회/작성/전달** <br>
- 일기 작성 후 임시저장이 가능하며 일기 전달 후 감정 분석 레포트로 이동 가능<br>

| 일기 조회 | 일기 작성 | 일기 전달 | 
|---|---|---|
|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/636a6687-b216-4707-947f-186f7324fdb3.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/7cdedb88-1fa0-4238-b9cd-bfec81bba3b9.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/75d9f671-8926-4466-a2e4-382657e2648d.png" width="200"/>|

📍 **일기장 비활성화/삭제** <br>
- 일기장을 비활성화 할 수 있으며 비활성화 이후 일기장 완전히 삭제 가능<br>

|비활성화 모달|비활성화 일기장 관리|일기장 삭제|
|---|---|---|
| <img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/080ff21c-e475-4acf-9b02-b147c5017af3.png" width="200"/> | <img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/fc77c37a-ee26-4bfa-9098-55364116fd79.png" width="200"/> | <img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/b1072612-858f-4850-ba27-23ec317c5e6f.png" width="200"/>

📍 **감정 분석 레포트**
- 매우 긍정/긍정/보통/부정/매우 부정 중 하나로 분류한 결과를 제공
- 사용자의 일기 내용 및 분위기에 어울리는 색상 코드로 하루를 표현
-  ‘<상황이나 사건>에 대한 <감정>’ 형식으로 한 줄 요약 제공<br>

|감정 분석 레포트|일기 조회 화면에서 이동|
|---|---|
|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/2dab2e24-3a73-49d0-b1e0-826e63d53871.png" width="200"/>|<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/0fa95c1d-239b-4cd9-bcf5-fe90e2e3ad68.png" width="200"/>|

📍 **비속어 필터링** <br>
- 필터링 설정 시 비속어 * 처리<br>

| <img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/a0da8d89-2396-4818-a9da-bc10743b8f8c.png" width="200"/> | <img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/d11e5974-5bdb-4076-8f71-8684e694762a.png" width="200"/>|
|---|---|

📍 **실시간 알림** <br>
- [일기장 생성], [일기장 비활성화], [상대방으로부터 일기 답장] 이벤트 발생 시 해당 내용에 대한 실시간 푸시 알림 제공<br>
- [React+Recoil+SSE(Server Sent Events)로 실시간 알림 구현하기 velog 정리](https://velog.io/@rwaeng/ReactRecoilSSEServer-Sent-Events%EB%A1%9C-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%95%8C%EB%A6%BC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
<img src="https://github.com/Dallili/BeMeeelFriend_front/assets/80890092/8d2c8da3-4c36-4bf1-86eb-6b410c3cd6b7.png" width="200"/>

## 디렉토리 구조
```
📦src
 ┣ 📂api <- api 모음
 ┣ 📂components <- 컴포넌트
 ┣ 📂hooks <- 커스텀 훅
 ┣ 📂img <- 사용한 이미지
 ┣ 📂pages <- 기능 별 페이지
 ┃ ┣ 📂Diarys
 ┃ ┃ ┣ 📜CreateDiaryPage.js
 ┃ ┃ ┣ 📜DeleteDiaryPage.js
 ┃ ┃ ┣ 📜DiaryDonePage.js
 ┃ ┃ ┣ 📜DisabledDiaryPage.js
 ┃ ┃ ┣ 📜EmotionReport.js
 ┃ ┃ ┣ 📜EmotionReport.scss
 ┃ ┃ ┣ 📜ReadDiaryPage.js
 ┃ ┃ ┣ 📜SendDiaryPage.js
 ┃ ┃ ┗ 📜WriteDiaryPage.js
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜LoginPage.js
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜HistoryCabinetPage.js
 ┃ ┃ ┣ 📜LoadingPage.js
 ┃ ┃ ┣ 📜MainPage.js
 ┃ ┃ ┣ 📜MainPage.scss
 ┃ ┃ ┗ 📜NotifyPage.js
 ┃ ┣ 📂Settings
 ┃ ┃ ┣ 📜AnnouncementDetailPage.js
 ┃ ┃ ┣ 📜AnnouncementPage.js
 ┃ ┃ ┣ 📜InquiryPage.js
 ┃ ┃ ┣ 📜PasswordChangePage.js
 ┃ ┃ ┣ 📜ProfileEditPage.js
 ┃ ┃ ┣ 📜SettingsMenuPage.js
 ┃ ┃ ┣ 📜UserGuide.scss
 ┃ ┃ ┣ 📜UserGuidePage.js
 ┃ ┃ ┣ 📜UserReportPage.js
 ┃ ┃ ┗ 📜WithdrawalPage.js
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜SignupPage.js
 ┣ 📂recoil
 ┣ 📂router 
 ┣ 📜App.js
 ┣ 📜index.js
 ┣ 📜index.scss
 ┗ 📜_utils.scss
```
