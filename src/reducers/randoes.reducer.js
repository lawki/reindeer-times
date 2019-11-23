import { pending, getPendingState, GET_RANDOES, fulfilled, 
    getFulfilledState, rejected, getRejectedState 
} from "../store/actions";

export const initialState = {
    randoes: {
        loading: false,
        error: false,
        data: null
    }
}

export function GetRandoesReducer(state = initialState, action) {
    switch (action.type) {
        case pending(GET_RANDOES):
            return getPendingState();
        case fulfilled(GET_RANDOES):
            return getFulfilledState(action);
        case rejected(GET_RANDOES):
            return getRejectedState(action);
        default:
            return state;
    }
}