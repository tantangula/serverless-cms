import { connect } from 'react-redux';
import { getNumber } from '../redux/actions';
import Number from './NumberB';

const mapStateToProps = state => {
  const { seconds, secondsArray } = state;
  return {
    seconds: seconds,
    secondsArray: secondsArray
  };
};

const mapDispatchToProps = dispatch => ({
  getNumber: () => dispatch(getNumber()),
});

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const NumberContainer = wrapper(Number);
export default NumberContainer;
