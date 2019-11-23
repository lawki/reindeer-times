import { combineReducers } from "redux";
import { GetRandoesReducer } from "../reducers/randoes.reducer";
import { FetchStudentsReducer } from "../reducers/students.reducer";
import { ComponentDidRenderReducer } from "../components/common.reducer";
export default combineReducers({
    randoes: GetRandoesReducer,
    students: FetchStudentsReducer,
    componentRendered: ComponentDidRenderReducer
});