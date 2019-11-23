import { combineReducers } from "redux";
import { GetRandoesReducer } from "../reducers/randoes.reducer";
export default combineReducers({
    randoes: GetRandoesReducer
});