import {http} from "../util/setting"

class TicketService {
    createShowTime(thongTinLichChieu) {
        return http.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }

}

export const ticketService = new TicketService();
