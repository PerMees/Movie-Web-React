import { GROUP_ID, http } from "../../util/setting";

export const GetListFilmService = () => {
  return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
};

export const GetFilmByIdService = (id) => {
  return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
};

export const GetFilmOfCinemaService = (maRap) => {
  return http.get(
    `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=${GROUP_ID}`
  );
};

export const GetScheduleOfFilmService = (maPhim) => {
  return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
};

export const GetBannerService = () => {
  return http.get(`/api/QuanLyPhim/LayDanhSachBanner`);
};
