import * as Constant from './constants';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

function countReducer (state = initialState, action) {
  switch (action.type) {
    case Constant.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case Constant.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case Constant.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case Constant.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export default countReducer;
