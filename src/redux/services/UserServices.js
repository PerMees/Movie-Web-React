import { http } from "../../util/setting";

export const RegisterService = (user) => {
  return http.post(`/api/QuanLyNguoiDung/DangKy`, user);
};
export const LoginService = (account) => {
  return http.post("/api/QuanLyNguoiDung/DangNhap", account);
};
