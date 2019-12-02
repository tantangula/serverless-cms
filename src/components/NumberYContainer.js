import { connect } from 'react-redux';
import { getNumber } from '../redux/actions';
import Number from './NumberY';

const mapStateToProps = state => {
  const { seconds } = state;
  return {
    seconds: seconds
  };
};

const mapDispatchToProps = dispatch => ({
  getNumber: () => dispatch(getNumber()),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const NumberContainer = wrapper(Number);
export default NumberContainer;
