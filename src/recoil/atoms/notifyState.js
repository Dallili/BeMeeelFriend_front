import {atom, selector} from "recoil";

export const notifyState = atom({
    key: "notifyState",
    default: []
});

export const notifystateSelector = selector({
    key: 'notifyListStateSelector',
    get: ({get}) => {
        const notifyList = get(notifyState);
        return notifyList
    },
    set: ({set, get}, newValue) => {
        const newNotify = get(notifyState);
        set(notifyState, [...newNotify, newValue]);
        set(notifyArrivalState, true);
    }
});

export const notifyArrivalState = atom({
    key: "notifyArrivalState",
    default: false
});

export const notifyArrivalStateSelector = selector({
    key: 'notifyArrivalStateSelector',
    get: ({get}) => {
        const notifyList = get(notifyArrivalState);
        return notifyList
    },
    set: ({set}) => {
        set(notifyArrivalState, false);
    }
})