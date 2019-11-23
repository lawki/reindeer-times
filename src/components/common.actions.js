import { COMPONENT_DID_RENDER } from "../store/actions";

export const renderEvent = (pageName)=> ({
    type: COMPONENT_DID_RENDER,
    payload: {
        data: pageName
    }
});
