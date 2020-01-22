import * as types from '../actionTypes';
import { Journey } from '../../models/journey';

function addJourneySuccess(payload: Journey) {
  return {
      type: types.ADD_JOURNEY,
      payload,
  };
}

export default function addJourney(payload: Journey) {
  return (dispatch: Function) => {
    dispatch(addJourneySuccess(payload));
  };
}