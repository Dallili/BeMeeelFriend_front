export const shareKakao = (key) => {
    window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
            title: "비밀친구 | 나랑... 비밀친구할래...?( ͡° ͜ʖ ͡°)\n지금 바로 비밀친구에 접속해서 친구랑 일기를 교환해보세요!",
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