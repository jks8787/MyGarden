import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { VictoryPie, VictoryLabel } from "victory";


export default class CropPieChart extends Component {

  static propTypes = {
    deleteCropPieChart:PropTypes.func,
    cropData: PropTypes.string,
    cropChartId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { deleteCropPieChart, cropChartId } = this.props;
    deleteCropPieChart(cropChartId);
  }

  render() {
    const {
      cropData
    } = this.props;
    // "Tomatoes, 10 / Cucumbers, 20"
    const initData = cropData.split("/");
    const chartItemsData = [];
    const finalChartItemsData = [];
    initData.forEach(function(el){
      let item = el.split(", ");
      chartItemsData.push(item);
    });

    chartItemsData.forEach(function(el){
      let itemObj = {x: el[0], y: parseInt(el[1])};
      finalChartItemsData.push(itemObj);
    })
    console.log(finalChartItemsData);
    return (
      <div className="crop-pie-chart">
        <VictoryPie
          style={{
            labels: {
              fill: "white",
              fontSize: 12,
              fontWeight: "bold"
            }
          }}
          data={finalChartItemsData}
        />
        <button
          onClick={this.onButtonClick}
        >
         delete
        </button>
      </div>
    );
  }

}
