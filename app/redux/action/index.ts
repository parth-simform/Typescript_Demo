import {FETCH_DATA, SAVE_DATA} from './type';

export function fetchApiData() {
  return {
    type: FETCH_DATA,
  };
}

//if you don't know about the response then use generic datatype
export function saveApiData<T>(response: T) {
  return {
    type: SAVE_DATA,
    payload: response,
  };
}
