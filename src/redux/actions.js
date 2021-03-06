import axios from 'axios';
import url from '../url.js';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const UPDATE_CODE = 'UPDATE_CODE';

export const setPosts = (data) => {
  const posts = data.Items;
  return {
    type: GET_POSTS,
    posts,
  };
};

export const setPost = (data) => {
  let post;
  if(data.Items[0]) {
    post = data.Items[0];
  } else {
    post = {
      id:0,
      body:''
    };
  }
  return {
    type: GET_POST,
    post
  };
};

export const updateCode = (newCode) => {
  console.log('updating code', newCode);
  return {
    type: UPDATE_CODE,
    code: newCode
  };
};

export function getPosts() {
  return function(dispatch) {
    return axios.get(url.api + "/posts")
      .then(({ data }) => {
      dispatch(setPosts(data));
    });
  };
}

export function getPost(id) {
  return function(dispatch) {
    return axios.get(url.api + "/posts/" + id)
      .then(({ data }) => {
      dispatch(setPost(data));
    });
  };
}