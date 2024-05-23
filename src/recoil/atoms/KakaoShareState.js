import {atom, selector} from "recoil";

export const kakaoShareState = atom({
    key: "kakaoShareState",
    default: {}
})

export const kakaoShareStateSelector = selector({
    key: 'kakaoShareStateSelector',
    get: ({get}) => {
        const sharestate = get(kakaoShareState);
        return sharestate
    },
    set: ({set, get}, newValue) => {
        set(kakaoShareStateSelector, {
            pathname: newValue.pathname,
            search: newValue.search
        });
    }
});