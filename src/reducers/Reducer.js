import { CHANGE_CITY, TORONTO } from '../constants/Constants';

const initialState = {
    city: TORONTO
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return { ...state, city: action.payload };
        default:
            return state;
    }
};

export default rootReducer;