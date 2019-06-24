import { CHANGE_DATESTART, CHANGE_FINALDATE, SHOW_DATES, DOLLARS_VALLUE, AVERAGE_DOLLAR, } from '../actions/types';

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

// export async const getData = dispatch => {

//     try {
//         const { startDate, endDate } = this.props.dates
//         const initialDay = startDate.getDate()
//         const initialYear = startDate.getFullYear()
//         const initialMonth = startDate.getMonth() + 1
//         const finalDay = endDate.getDate()
//         const finalYear = endDate.getFullYear()
//         const finalMonth = endDate.getMonth() + 1
//         if (initialDay === finalDay) {
//             const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/${initialYear}/${initialMonth}/${initialDay}/05?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`
//         }
//         const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${initialYear}/${initialMonth}/dias_i/${initialDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`
//         const response = await fetch(url);
//         const responseJson = await response.json()
//         const _data = []
//         const data = responseJson.Dolares
//         data.map(dollar => {
//             return _data.push({
//                 value: parseInt(dollar.Valor),
//                 date: dollar.Fecha
//             })
//         })
//         dispatch({
//             type: GET_DATA,
//             payload: data
//         })
//     }
//     catch (error) {
//         throw error
//     }
// }