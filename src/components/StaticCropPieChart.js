import Component from 'react-pure-render/component';
import React from 'react';
import { VictoryPie, VictoryLabel } from "victory";
import { connect } from 'react-redux';
//import { fetchStaticPieChartData } from '../actions';
import * as actions from '../actions';

class StaticCropPieChart extends Component {
  componentWillMount() {
    this.props.fetchStaticPieChartData();
  }

  render() {
    const dataPulledFromFireBase = this.props.staticPieCharts.data;
    const divStyle = {
      backgroundColor: 'green',
      maxWidth: '450px'
    };

    return (
      <div
        className="static-pie-chart"
        style={divStyle}
      >
        <h2> Static Crop Pie Chart </h2>
        <VictoryPie
          style={{
            data: {
              stroke: (data) => data.y > 75 ?
                "black" : "transparent",
              opacity: (data) => data.y > 75 ?
                1 : 0.4
            },
            labels: {
              fill: "white",
              fontSize: 12,
              fontWeight: "bold"
            }
          }}
          data={dataPulledFromFireBase}
        />
        <svg>
          <VictoryLabel
            x={10}
            y={20}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Tomatoes: 20lbs
          </VictoryLabel>
          <VictoryLabel
            x={10}
            y={40}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Bell Peppers: 10lbs
          </VictoryLabel>
          <VictoryLabel
            x={10}
            y={80}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Hot Peppers: 151bs
          </VictoryLabel>
          <VictoryLabel
            x={10}
            y={100}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Cucumbers: 20lbs
          </VictoryLabel>
        </svg>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    staticPieCharts: state.staticPieCharts
  };
}

export default connect(mapStateToProps, actions)(StaticCropPieChart);
