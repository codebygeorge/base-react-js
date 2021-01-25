import {
    CATS_CALL,
    CATS_CALL_SUCCESS,
    CATS_CALL_FAILED,
    CATS_CALL_MORE,
    CATS_CALL_MORE_SUCCESS,
    CATS_CALL_MORE_FAILED
} from './types';


const initialState = {
    cats: [],
    page: 1,
    isFetched: false,
    isLoading: false,
    error: undefined,
    moreError: undefined
};

export default (state = initialState, { type, payload }) => {
    const newState = { ...state };
    const newCats = [...newState.cats];

    switch (type) {

        case CATS_CALL: {
            newState.isFetched = false;
            newState.error = undefined;
            return newState;
        }

        case CATS_CALL_SUCCESS: {
            newState.isFetched = true;
            if (payload.data) {
                newState.cats = [...payload.data];
            }
            return newState;
        }

        case CATS_CALL_FAILED: {
            newState.isFetched = true;
            newState.error = payload.error;
            return newState;
        }

        case CATS_CALL_MORE: {
            newState.isLoading = true;
            newState.moreError = undefined;
            return newState;
        }

        case CATS_CALL_MORE_SUCCESS: {
            newState.isLoading = false;
            if (payload.data) {
                newState.page += 1;
                newState.cats = [...newCats, ...payload.data];
            }
            return newState;
        }

        case CATS_CALL_MORE_FAILED: {
            newState.isLoading = false;
            newState.moreError = payload.error;
            return newState;
        }

        default:
            return state;
    }
};