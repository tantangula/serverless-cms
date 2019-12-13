import { GET_NUMBER } from './actions';

const initialState = {
  notes: [],
  seconds: 123,
  seconds02: 123,
  secondsArray: [
      {number:2},
      {number:34},
      {number:5},
      {number:34},
      {number:23}
    ]
};

function rootReducer(state = initialState, action) {
  console.log('state: ', state);
  switch(action.type) {
    case GET_NUMBER:
      return {
        secondsArray: state.secondsArray,
        notes: [],
        seconds: action.number
      };
    default:
      return state;
  }
}

export default rootReducer;