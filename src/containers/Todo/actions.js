/**
 * Todo actions
 */

import axios from 'axios';
import { getBaseUrl } from 'utils/request';
import * as Constants from './constants';

export const getTodo = () => {
  return dispatch => {
    dispatch(getTodoRequest());

    axios
      .get(getBaseUrl(), {})
      .then(response => {
        dispatch(getTodoRequestSuccess(response.data));
      })
      .catch(error => {
        dispatch(getTodoRequestFailure(error.message));
      });
  };
};

export const getTodoRequest = () => {
  return {
    type: Constants.GET_TODO_REQUEST
  }
}

export const getTodoRequestSuccess = (todo = []) => {
  return {
    type: Constants.GET_TODO_REQUEST_SUCCESS,
    todo,
  };
}

export const getTodoRequestFailure = error => {
  return {
    type: Constants.GET_TODO_REQUEST_FAILURE,
    error,
  };
}
