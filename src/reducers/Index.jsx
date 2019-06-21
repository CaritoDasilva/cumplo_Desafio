import { combineReducers } from 'redux';
import datesReducers from './datesReducers';


export default combineReducers({
    startDate: datesReducers
});