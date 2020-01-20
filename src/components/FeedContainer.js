import { connect } from 'react-redux';
import { getPosts } from '../redux/actions';
import Feed from './Feed';

const mapStateToProps = state => {
  const { posts } = state;
  return {
    posts: posts
  };
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const FeedContainer = wrapper(Feed);
export default FeedContainer;
