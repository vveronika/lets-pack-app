import { combineReducers } from 'redux';

import countriesReducer from './formData';
import journeysReducer from './journeys';

export default combineReducers({
  countries: countriesReducer,
  journeys: journeysReducer,
});