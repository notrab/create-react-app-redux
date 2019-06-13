import c from './../action-names/index'

export const increment = () => {
  return dispatch => {
    dispatch({
      type: c.INCREMENT_REQUESTED
    });

    dispatch({
      type: c.INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: c.INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: c.INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: c.DECREMENT_REQUESTED
    });

    dispatch({
      type: c.DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: c.DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: c.DECREMENT
      });
    }, 3000);
  };
};
