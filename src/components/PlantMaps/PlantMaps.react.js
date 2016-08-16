import * as plantMapsActions from '../../actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import PlantMap from './PlantMap.react';
import { connect } from 'react-redux';

export class PlantMaps extends Component {

  static propTypes = {
    deletePlantMap: PropTypes.func.isRequired,
    plantMaps: PropTypes.object.isRequired
  };

  render() {
    const { deletePlantMap, plantMaps } = this.props;

    if (!plantMaps.size) {
      return <p>no maps yet...</p>;
    }

    const list = plantMaps.toList().sortBy(item => item.createdAt).reverse();

    return (
      <div className="plant-maps">
        <div className="plant-maps__info">
          <p>Pink is the space between plants</p>
          <p>Green is the space that contain plants in the center</p>
        </div>
        <ul>
          {list.map(plantMap =>
            <PlantMap
              deletePlantMap={deletePlantMap}
              plantMapData={plantMap.plantMapData}
              plantMapId={plantMap.id}
              key={plantMap.id}
            />
          )}
        </ul>
      </div>
    );
  }

}

export default connect(state => ({
  plantMaps: state.plantMaps.map
}), plantMapsActions )(PlantMaps);
