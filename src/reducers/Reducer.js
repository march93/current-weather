import { CHANGE_CITY, LOAD_DATA, TORONTO } from '../constants/Constants';

const initialState = {
    city: TORONTO,
    data: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return { ...state, city: action.payload };
        case LOAD_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default rootReducer;