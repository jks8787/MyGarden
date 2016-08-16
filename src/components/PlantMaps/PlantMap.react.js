import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class PlantMap extends Component {

  static propTypes = {
    deletePlantMap: PropTypes.func,
    plantMapData: PropTypes.string,
    plantMapId: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { deletePlantMap, plantMapId } = this.props;
    deletePlantMap(plantMapId);
  }

  render() {
    const {
      plantMapData
    } = this.props;

    const height = parseInt(plantMapData.split(", ")[0]);
    const width = parseInt(plantMapData.split(", ")[1]);
    const offset = 5;
    const blockSize = 20;
    const numberOfblocksInRow = Math.ceil((width / (20 + offset)));
    const numberofRows =  Math.ceil((height / (20 + offset)));
    const numOfPlantBlocksPerRow = (numberOfblocksInRow/2);
    const numOfSpaceBlocksPerRow = Math.ceil((numberOfblocksInRow/2));

    function plantBlocks(num, cols){
      let plantBlockItems = [];
      const rowPlantKeysArray = Array.apply(null, {length: num}).map(Number.call, Number);
      const colsPlantKeysArray = Array.apply(null, {length: cols}).map(Number.call, Number);

      colsPlantKeysArray.forEach(function(col) {
        rowPlantKeysArray.forEach(function(row){
          let factor = (row + (row + 1));
          let plant = {x: ((blockSize + offset) * factor), y: ((blockSize + offset) * col) }
          plantBlockItems.push(plant);
        })
      })
      return plantBlockItems;
    };

    function spaceBlocks(num, cols){
      let spaceBlockItems = [];
      const rowSpaceKeysArray = Array.apply(null, {length: num}).map(Number.call, Number);
      const colsSpaceKeysArray = Array.apply(null, {length: cols}).map(Number.call, Number);

      colsSpaceKeysArray.forEach(function(col) {
        rowSpaceKeysArray.forEach(function(row){
          let factor = (row + row);
          let space = {x: ((blockSize + offset) * factor), y: ((blockSize + offset) * col) }
          spaceBlockItems.push(space);
        })
      })
      return spaceBlockItems;
    };

    const pl = plantBlocks(numOfPlantBlocksPerRow, numberofRows);
    const sp = spaceBlocks(numOfSpaceBlocksPerRow, numberofRows);

    return (
      <div className="map">
        <div className="map__svg-wrap">
          <svg width={width - offset} height={height - offset}>
          <g>
            <rect x="0" y="0" width={width} height={height} fill="green" stroke="darkgreen"/>
            {pl.map(plant =>
              <rect x={plant.x} y={plant.y} width={blockSize} height={blockSize} fill="lightgreen" key={`${plant.x}${plant.y}`}/>
            )}
            {sp.map(space =>
              <rect x={space.x} y={space.y} width={blockSize} height={blockSize} fill="pink" key={`${space.x}${space.y}`}/>
            )}
          </g>
          </svg>
        </div>
        <button
          onClick={this.onButtonClick}
        >
         delete
        </button>
      </div>
    );
  }

}
