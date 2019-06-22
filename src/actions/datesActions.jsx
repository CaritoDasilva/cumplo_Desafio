import { CHANGE_DATESTART, CHANGE_FINALDATE } from '../actions/types';

export const changeDatePickerStart = (date) => {
    return {
        type: CHANGE_DATESTART,
        payload: date
    }
}

export const changeDatePickerEnd = (date) => {
    return {
        type: CHANGE_FINALDATE,
        payload: date
    }
}