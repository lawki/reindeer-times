import { COMPONENT_DID_RENDER } from "../store/actions";

export const ComponentDidRenderReducer = (state={},action)=>{
    switch(action.type){
        case COMPONENT_DID_RENDER:{
            const count = state[action.payload.data] || 0;
            return {
                ...state,
                [action.payload.data]: count + 1
            }; 
        }
        default: return state;
    }
}