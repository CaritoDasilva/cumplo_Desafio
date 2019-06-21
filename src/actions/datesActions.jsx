import { CHANGE_DATESTART, CHANGE_FINALDATE } from '../actions/types';

export const changeDatePickerStart = () => {
    return {
        type: CHANGE_DATESTART
    }
}

export const changeDatePickerEnd = () => {
    return {
        type: CHANGE_FINALDATE
    }
}