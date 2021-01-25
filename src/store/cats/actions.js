import axiosInstance from '../../axios';
import { FETCH_LIMIT } from '../../constants';
import {
    CATS_CALL,
    CATS_CALL_SUCCESS,
    CATS_CALL_FAILED,
    CATS_CALL_MORE,
    CATS_CALL_MORE_SUCCESS,
    CATS_CALL_MORE_FAILED
} from './types';


const fetchCats = params => axiosInstance.get('/images/search', {
    params: {
        limit: FETCH_LIMIT,
        ...params
    }
})

const catsCallSuccess = data => ({
    type: CATS_CALL_SUCCESS, payload: { data }
})

const catsCallFailed = error => ({
    type: CATS_CALL_FAILED, payload: { error }
})

const catsCallMoreSuccess = data => ({
    type: CATS_CALL_MORE_SUCCESS, payload: { data }
})

const catsCallMoreFailed = error => ({
    type: CATS_CALL_MORE_FAILED, payload: { error }
})

export const catsCall = categoryId => async dispatch => {
    try {
        dispatch({ type: CATS_CALL })
        const { data } = await fetchCats({
            page: 1,
            category_ids: categoryId
        })
        dispatch(catsCallSuccess(data))
    } catch (error) {
        dispatch(catsCallFailed(error.toString()))
    }
}

export const catsCallMore = (categoryId, page) => async dispatch => {
    try {
        dispatch({ type: CATS_CALL_MORE })
        const { data } = await fetchCats({
            page,
            category_ids: categoryId
        })
        dispatch(catsCallMoreSuccess(data))
    } catch (error) {
        dispatch(catsCallMoreFailed(error.toString()))
    }
}