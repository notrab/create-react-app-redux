const counterActions = require('../action-types/counter');

const actions = exports;

actions.increment = () => {
  return dispatch => {
    dispatch({
      type: counterActions.INCREMENT_REQUESTED
    });

    dispatch({
      type: counterActions.INCREMENT
    });
  };
};

actions.incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: counterActions.INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: counterActions.INCREMENT
      });
    }, 3000);
  };
};

actions.decrement = () => {
  return dispatch => {
    dispatch({
      type: counterActions.DECREMENT_REQUESTED
    });

    dispatch({
      type: counterActions.DECREMENT
    });
  };
};

actions.decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: counterActions.DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: counterActions.DECREMENT
      });
    }, 3000);
  };
};
