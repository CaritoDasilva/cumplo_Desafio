import { CHANGE_DATESTART, CHANGE_FINALDATE } from '../actions/types';

//State Inicial

const date = new Date();

const stateInitial = {
    dateAct: Math.round(Date.now()),
    startDate: new Date(date.getFullYear(), date.getMonth(), 1),
    endDate: new Date()
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

        default:
            return state;
    }
}