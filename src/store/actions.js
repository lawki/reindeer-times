export const pending = (action) => `${action}_PENDING`;
export const fulfilled = (action) => `${action}_FULFILLED`;
export const rejected = (action) => `${action}_REJECTED`;

export const getPendingState = () => ({
    loading: true,
    error: false,
    data: null
});

export const getFulfilledState = (action) => ({
    loading: false,
    error: false,
    data: action.payload
});

export const getRejectedState = (action) => ({
    loading: false,
    error: true,
    data: action.payload
});


export const GET_RANDOES = "GET_RANDOES";

