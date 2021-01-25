import axiosInstance from '../../axios';
import {
    CATEGORIES_CALL,
    CATEGORIES_CALL_SUCCESS,
    CATEGORIES_CALL_FAILED,
    SET_CURRENT_CATEGORIES
} from './types';


const categoriesCallSuccess = data => ({
    type: CATEGORIES_CALL_SUCCESS, payload: { data }
})

const categoriesCallFailed = error => ({
    type: CATEGORIES_CALL_FAILED, payload: { error }
})

export const categoriesCall = () => async dispatch => {
    try {
        dispatch({ type: CATEGORIES_CALL })
        const { data } = await axiosInstance.get('/categories')
        dispatch(categoriesCallSuccess(data))
    } catch (error) {
        dispatch(categoriesCallFailed(error.toString()))
    }
}

export const setCurrentCategory = id => ({
    type: SET_CURRENT_CATEGORIES, payload: { id }
})