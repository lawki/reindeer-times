import { FETCH_STUDENTS } from "../../store/actions";
import { api } from "../../rest-api";

export function fetchStudents(){
    return dispatch=> dispatch({
        type: FETCH_STUDENTS,
        payload: api({ type: FETCH_STUDENTS })
    });
}