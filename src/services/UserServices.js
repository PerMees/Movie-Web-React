import {GROUP_ID, http} from "../util/setting";

class UserService {
    Register(user) {
        return http.post(`/api/QuanLyNguoiDung/DangKy`, user);
    }

    Login(account) {
        return http.post("/api/QuanLyNguoiDung/DangNhap", account);
    }

    GetListUser(searchValue) {
        if (searchValue !== "")
            return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${searchValue}`)
        return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
    }

    DeleteUser(taiKhoan) {
        return http.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
}

export const userService = new UserService();
