import { combineReducers } from "redux";
import { GetRandoesReducer } from "../reducers/randoes.reducer";
import { FetchStudentsReducer } from "../reducers/students.reducer";
export default combineReducers({
    randoes: GetRandoesReducer,
    students: FetchStudentsReducer
});