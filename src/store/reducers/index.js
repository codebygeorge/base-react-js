import { combineReducers } from 'redux';
import catsData from '../cats/reducers';
import categoriesData from '../categories/reducers';

export default combineReducers({
    catsData,
    categoriesData
});