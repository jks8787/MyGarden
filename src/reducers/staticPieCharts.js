const staticPieCharts = (state={}, action) => {
  switch(action.type) {
    case 'FETCH_STATIC_PIE_CHART_DATA':
      return action.payload;
    default:
      return state;
  }
}

export default staticPieCharts;
