import * as cropPieChartActions from '../../actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import CropPieChart from './CropPieChart.react';
import { connect } from 'react-redux';

export class CropPieCharts extends Component {

  static propTypes = {
    deleteCropPieChart: PropTypes.func.isRequired,
    cropPieCharts: PropTypes.object.isRequired
  };

  render() {
    const { deleteCropPieChart, cropPieCharts } = this.props;

    if (!cropPieCharts.size) {
      return <p>no charts yet...</p>;
    }

    const list = cropPieCharts.toList().sortBy(item => item.createdAt).reverse();

    return (
      <div className="crop-pie-charts">
        <ul>
          {list.map(chart =>
            <CropPieChart
              deleteCropPieChart={deleteCropPieChart}
              cropData={chart.cropPieChartData}
              cropChartId={chart.id}
              key={chart.id}
            />
          )}
        </ul>
      </div>
    );
  }

}

export default connect(state => ({
  cropPieCharts: state.cropPieCharts.map
}), cropPieChartActions )(CropPieCharts);
