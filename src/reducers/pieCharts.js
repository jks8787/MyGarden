const pieCharts = (state={}, action) => {
  switch(action.type) {
    case 'FETCH_PIE_CHART_DATA':
      return action.payload;
    default:
      return state;
  }
}

export default pieCharts;
