import { connect } from 'react-redux'
import { toggleLayout } from '../actions'
import LayoutList from '../components/LayoutList'

const getVisibleLayouts = (layouts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return layouts
    case 'SHOW_COMPLETED':
      return layouts.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return layouts.filter(t => !t.completed)
  }
};

const mapStateToProps = (state) => {
  return {
    layouts: getVisibleLayouts(state.layouts, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLayoutClick: (id) => {
      dispatch(toggleLayout(id))
    }
  }
};

const VisibleLayoutList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutList);

export default VisibleLayoutList;
