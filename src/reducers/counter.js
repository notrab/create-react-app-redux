const counterActions = require('../action-types/counter');

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case counterActions.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case counterActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case counterActions.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case counterActions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};
