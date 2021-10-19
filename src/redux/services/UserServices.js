import { http } from "../../util/setting";

class UserService {
  Register(user) {
    return http.post(`/api/QuanLyNguoiDung/DangKy`, user);
  }
  Login(account) {
    return http.post("/api/QuanLyNguoiDung/DangNhap", account);
  }
}
export const userService = new UserService();
