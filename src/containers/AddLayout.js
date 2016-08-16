import AddLayoutForm from '../components/AddLayoutForm';
import { connect } from 'react-redux';
import { addLayout } from '../actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addLayout(text));
    }
  }
};

let AddLayout = connect(null, mapDispatchToProps)(AddLayoutForm);

export default AddLayout;
