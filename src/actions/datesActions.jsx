import { CHANGE_DATESTART, CHANGE_FINALDATE, SHOW_DATES, DOLLARS_VALLUE } from '../actions/types';

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

export const getDates = () => {
    return {
        type: SHOW_DATES
    }
}

export const dollarsValuesAndDates = (dollars) => {

    return {
        type: DOLLARS_VALLUE,
        payload: dollars
    }
}

export const setAverageDollar = (dollarAverages) => {
    return {
        type: AVERAGE_DOLLAR,
        payload: dollarAverages
    }
}

