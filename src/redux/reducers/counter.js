import c from "../action-names";

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case c.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case c.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case c.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};
