import { FETCH_DATA } from "../actions/type";

const initialState = { events: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log(1, action.events)
      return {
        ...state, events: action.events
      };

    default:
      return state;
  }
};
