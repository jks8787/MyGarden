import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { VictoryPie, VictoryLabel } from "victory";


export default class StaticCropPieChart extends Component {

  static propTypes = {
    isVisable: PropTypes.bool.isRequired
  };

  render() {
    // TODO: user isVisable to toggle the static example
    const {
      isVisable
    } = this.props;

    return (
      <div className="static-pie-chart">
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
          data={[
            {x: "Tomatoes", y: 10},
            {x: "Bell Peppers", y: 1},
            {x: "Hot Peppers", y: 15},
            {x: "Cucumbers", y: 20},
          ]}
        />
        <svg>
          <VictoryLabel
            x={10}
            y={20}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Tomatoes: 10lbs
          </VictoryLabel>
          <VictoryLabel
            x={10}
            y={40}
            lineHeight={2}
            textAnchor="start"
            verticalAnchor="start"
          >
            Bell Peppers: 1lbs
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

}
