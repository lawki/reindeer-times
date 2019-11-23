import {
    pending, getPendingState, fulfilled,
    getFulfilledState, rejected, getRejectedState, FETCH_STUDENTS
} from "../store/actions";

export const initialState = {
    loading: false,
    error: false,
    data: null
}

export function FetchStudentsReducer(state = initialState, action) {
    switch (action.type) {
        case pending(FETCH_STUDENTS):
            return getPendingState();
        case fulfilled(FETCH_STUDENTS):
            return getFulfilledState(action);
        case rejected(FETCH_STUDENTS):
            return getRejectedState(action);
        default:
            return state;
    }
}