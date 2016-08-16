import * as plantMapsActions from '../../actions';
import { connect } from 'react-redux';
import Component from 'react-pure-render/component';
import NewPlantMap from './NewPlantMap.react';
import PlantMaps from './PlantMaps.react';
import PlantMapControls from './PlantMapControls.react';
import React, { PropTypes } from 'react';
import StaticPlantMap from './StaticPlantMap.react';
import StaticCropPieChart from './StaticCropPieChart.react';
import CropPieCharts from './CropPieCharts.react';
import NewCropPieChart from './NewCropPieChart.react';


class Page extends Component {

  static propTypes = {
    // this is just the container page here
  };

  render() {
    return (
      <div className="garden-mapper-page">
        { /*
        <NewPlantMap />
        <PlantMaps />
        <PlantMapControls />
        <br/>
        */ }
        <StaticPlantMap isVisable/>
        <br/>
        { /*
        <NewCropPieChart />
        <CropPieCharts />
        <br/>
        */ }
        <StaticCropPieChart />
      </div>
    );
  }

}

export default connect(state => ({
  plantMaps: state.plantMaps.dataForPlantMaps
}), plantMapsActions)(Page);
