import {axiosInstance} from "./user";

// 공지사항 목록 조회
export const getAnnouncement = async () => {
    try {
        const res = await axiosInstance.get(`/notice`);
        return res.data
    } catch (e) {
        alert("공지사항 목록 조회 실패");
    }
}

// 공지사항 상세 내용 조회
export const getDetailAnnouncement = async (noticeID) => {
    try {
        const res = await axiosInstance.get(`/notice/${noticeID}`);
        return res.data
    } catch (e) {
        alert("상세 목록 조회 실패");
    }
}

export const patchFiltering = async (data) => {
    try {
        const res = await axiosInstance.patch('/members/useFiltering', data);
    } catch (e) {
        alert("필터링 설정 실패");
    }
}
//
// // 테스트용
// export const postNotice = async (data) => {
//     try {
//         const res = await axiosInstance.post('/notice', data);
//     } catch (e) {
//         alert("공지사항 생성 실패");
//     }
// }