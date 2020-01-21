import * as types from '../actionTypes';
import { Journey } from '../../models/journey';

const addJourney = (payload: Journey) => {
  return {
    type: types.ADD_JOURNEY,
    payload,
  };
};

const addJourneyAction = (payload: Journey) => (dispatch: any) => {
  dispatch(addJourney(payload));
};

export default {
  addJourney: addJourneyAction,
};
