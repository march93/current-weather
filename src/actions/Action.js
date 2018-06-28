import { CHANGE_CITY, LOAD_DATA } from '../constants/Constants';

export const changeCity = city => ({ type: CHANGE_CITY, payload: city });

export const loadData = data => ({ type: LOAD_DATA, payload: data });