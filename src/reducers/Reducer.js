import { CHANGE_CITY } from "../constants/action-types";

const initialState = {
    cities: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return { ...state, cities: [...state.cities, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;