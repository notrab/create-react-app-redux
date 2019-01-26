import * as Constants from './constants';

const initialState = {
  todo: [],
  error: false
}

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case Constants.GET_TODO_REQUEST:
      return {
        ...state,
      }

    case Constants.GET_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        todo: [...state.todo, action.todo],
      }

    case Constants.GET_TODO_REQUEST_FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default todoReducer;
