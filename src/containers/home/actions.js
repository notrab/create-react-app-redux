import * as Constant from './constants';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: Constant.INCREMENT_REQUESTED
    })

    dispatch({
      type: Constant.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Constant.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: Constant.INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: Constant.DECREMENT_REQUESTED
    })

    dispatch({
      type: Constant.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Constant.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: Constant.DECREMENT
      })
    }, 3000)
  }
}
