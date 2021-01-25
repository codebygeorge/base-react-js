import {
    CATEGORIES_CALL,
    CATEGORIES_CALL_SUCCESS,
    CATEGORIES_CALL_FAILED,
    SET_CURRENT_CATEGORIES
} from './types';


const initialState = {
    categories: [],
    isFetched: false,
    currentId: undefined,
    error: undefined
};

export default (state = initialState, { type, payload }) => {
    const newState = { ...state };

    switch (type) {

        case CATEGORIES_CALL: {
            newState.isFetched = false;
            newState.error = undefined;
            return newState;
        }

        case CATEGORIES_CALL_SUCCESS: {
            newState.isFetched = true;
            if (payload.data && payload.data.length > 0) {
                newState.categories = [...payload.data];
                newState.currentId = payload.data[0].id;
            }
            return newState;
        }

        case CATEGORIES_CALL_FAILED: {
            newState.isFetched = true;
            newState.error = payload.error;
            return newState;
        }

        case SET_CURRENT_CATEGORIES: {
            newState.currentId = payload.id;
            return newState;
        }

        default:
            return state;
    }
};