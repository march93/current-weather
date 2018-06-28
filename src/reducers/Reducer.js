import { CHANGE_CITY, TORONTO } from "../constants/Constants";

const initialState = {
    cities: TORONTO
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
};

export default rootReducer;