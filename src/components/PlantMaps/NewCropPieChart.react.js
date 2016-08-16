import * as cropPieChartActions from '../../actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class NewCropPieChart extends Component {

  static propTypes = {
    addCropPieChart: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    if (e.key !== 'Enter') return;
    const { addCropPieChart } = this.props;
    if (!input.cropPieChartData.value.trim()) return;
    addCropPieChart(input.cropPieChartData.value);
    input.value = '';
  }

  render() {
    const placeholder = 'ex: Tomatoes, 10 / Cucumbers, 20';

    return (
      <input
        autoFocus
        className="new-crop-pie-chart"
        maxLength={300}
        onKeyDown={this.onInputKeyDown}
        placeholder={placeholder}
        {...cropPieChartData}
      />
    );
  }

}

export default connect(null, cropPieChartActions)(NewCropPieChart);
