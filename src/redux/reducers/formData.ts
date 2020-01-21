import {FETCH_COUNTRIES_SUCCESS} from '../actionTypes';

const initialState = {
  countries: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;