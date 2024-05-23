export const shareKakao = (key) => {
    window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
            title: "비밀친구 | 나랑... 비밀친구할래...?",
            description: `[초대코드] ${key}`,
            imageUrl: '',
            link: {
                mobileWebUrl: "https://secret-friends.link",
                webUrl: "https://secret-friends.link",
            }
        },
        buttons: [
            {
                title: "회원가입",
                link: {
                    mobileWebUrl: "https://secret-friends.link/signup",
                    webUrl: "https://secret-friends.link/signup",
                },
            },
            {
                title: "일기장 만들기",
                link: {
                    mobileWebUrl: `https://secret-friends.link/newdiary/register-code?value=${key}`,
                    webUrl: `https://secret-friends.link/newdiary/register-code?value=${key}`,
                },
            },
        ],
    });
};