import { CHANGE_DATESTART, CHANGE_FINALDATE, SHOW_DATES, DOLLARS_VALLUE } from '../actions/types';

//State Inicial

const date = new Date();

const stateInitial = {
    dateAct: Math.round(Date.now()),
    startDate: new Date(date.getFullYear(), date.getMonth(), 1),
    endDate: new Date(),
    dollars: []
}

//Reducer

// const rootReducer 
export default function (state = stateInitial, action) {
    switch (action.type) {
        case CHANGE_DATESTART:
            return {
                ...state,
                startDate: action.payload
            }
        case CHANGE_FINALDATE:
            return {
                ...state,
                endDate: action.payload
            }
        case SHOW_DATES:
            return {
                ...state
            }
        case DOLLARS_VALLUE:
            return {
                ...state,
                dollars: action.payload
            }

        default:
            return state;
    }
}