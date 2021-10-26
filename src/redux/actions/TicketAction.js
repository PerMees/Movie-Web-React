import {ticketService} from "../../services/TicketService";
import {GET_FILM_TICKET} from "../types/TicketType";

export const GetChairsAction = (maLichChieu) => {
    return dispatch => {
        let promise = ticketService.GetChairs(maLichChieu);
        promise.then(res => {
            dispatch({type: GET_FILM_TICKET, filmTicketData: res.data.content})
        })
        promise.catch(err => {
            console.log(err.response?.data)
        })
    }
}