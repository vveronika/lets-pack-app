import {ADD_JOURNEY} from '../actionTypes';

const initialState = {
  journeys: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_JOURNEY:
      return {
        ...state,
        journeys: [...state.journeys, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;