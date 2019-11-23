import { COMPONENT_DID_RENDER, CHANGE_TAB } from "../store/actions";

export const renderEvent = (pageName)=> ({
    type: COMPONENT_DID_RENDER,
    payload: {
        data: pageName
    }
});

export const changeTab = ()=>({
    type: CHANGE_TAB
});
