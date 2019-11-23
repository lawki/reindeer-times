import { COMPONENT_DID_RENDER, CHANGE_TAB } from "../store/actions";

export const ComponentDidRenderReducer = (state={},action)=>{
    switch(action.type){
        case COMPONENT_DID_RENDER:{
            const count = state[action.payload.data] || 0;
            return {
                ...state,
                [action.payload.data]: count + 1
            }; 
        }
        case CHANGE_TAB: return {};
        default: return state;
    }
}