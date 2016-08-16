import * as plantMapActions from '../../actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class PlantMapControls extends Component {

  static propTypes = {
    clearAllPlantMaps: PropTypes.func.isRequired,
    plantMaps: PropTypes.object.isRequired
  };

  render() {
    const { clearAllPlantMaps, plantMaps } = this.props;

    return (
      <div className="buttons">
        <button
          disabled={plantMaps.size === 0}
          onClick={clearAllPlantMaps}
        >
        Clear All?
        </button>
      </div>
    );
  }

}

export default connect(state => ({
  plantMaps: state.plantMaps.map
}), plantMapActions)(PlantMapControls);
