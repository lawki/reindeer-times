import { COMPONENT_MOUNTED } from "../store/actions";

export const renderEvent = (pageName)=> ({
    type: COMPONENT_MOUNTED,
    payload: {
        data: pageName
    }
});
