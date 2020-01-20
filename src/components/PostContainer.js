import { connect } from 'react-redux';
import { getPost } from '../redux/actions';
import Post from './Post';

const mapStateToProps = state => {
  const { post } = state;
  return {
    post: post
  };
};

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(getPost(id)),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const PostContainer = wrapper(Post);
export default PostContainer;
