import { GET_POSTS, GET_POST, UPDATE_CODE } from './actions';

const code = `function add(a, b) {
  return a + b;
}
`;

const initialState = {
  code: code,
  posts: [],
  post: {body:''}
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case GET_POST:
      return {
        ...state,
        post: action.post
      };
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code
      };
    default:
      return state;
  }
}

export default rootReducer;