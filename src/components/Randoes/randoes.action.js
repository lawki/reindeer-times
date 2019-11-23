import { GET_RANDOES } from "../../store/actions";
import { api } from "../../rest-api";

export function getRandoes() {
    return function (dispatch) {
        return dispatch({
            type: GET_RANDOES,
            payload: api({ type: GET_RANDOES })
        });
    }
}