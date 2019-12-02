import { GET_NUMBER } from './actions';

const initialState = {
  notes: [],
  seconds: 123
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_NUMBER:
      return {
        notes: [],
        seconds: action.number
      };
    default:
      return state;
  }
}

export default rootReducer;