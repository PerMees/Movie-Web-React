import { http } from "../../util/setting";

export const GetCinemaService = () => {
  return http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
};

export const GetSubCinemaService = (maRap) => {
  return http.get(
    `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`
  );
};
