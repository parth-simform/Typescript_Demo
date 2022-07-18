import {FETCH_DATA, SAVE_DATA} from '../action/type';
import {getApidata, initValue} from '../reduxTypes';

const INITIAL_STATE: initValue = {
  loading: false,
  apiData: [],
};

export interface Action {
  type: string;
  payload: getApidata[];
}

function mainReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
      };
    case SAVE_DATA:
      return {
        ...state,
        apiData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default mainReducer;
