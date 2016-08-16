import * as plantMapsActions from '../../actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

class NewPlantMap extends Component {

  static propTypes = {
    addPlantMap: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    if (e.key !== 'Enter') return;
    const { addPlantMap } = this.props;
    if (!input.plantMapData.value.trim()) return;
    addPlantMap(input.plantMapData.value);
    input.value = '';
  }

  render() {
    const placeholder = 'ex: 100, 220';

    return (
      <input
        autoFocus
        className="new-plant-map"
        maxLength={100}
        onKeyDown={this.onInputKeyDown}
        placeholder={placeholder}
        {...plantMapData}
      />
    );
  }

}

export default connect(null, plantMapsActions)(NewPlantMap);
