import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class StaticPlantMap extends Component {

  static propTypes = {
    isVisable: PropTypes.bool.isRequired
  };

  render() {
    // TODO: user isVisable to toggle the static map example
    const {
      isVisable
    } = this.props;

    return (
      <div className="static-map">
        {/* this an example the static map */}
        <div className="static-map__svg-wrap">
          <svg width="250" height="50">
          <g>
            <rect x="0" y="0" width="220" height="45" fill="green" stroke="darkgreen"/>

            <rect x="25" y="0" width="20" height="20" fill="lightgreen"/>
            <rect x="75" y="0" width="20" height="20" fill="lightgreen"/>
            <rect x="125" y="0" width="20" height="20" fill="lightgreen"/>
            <rect x="125" y="0" width="20" height="20" fill="lightgreen"/>
            <rect x="175" y="0" width="20" height="20" fill="lightgreen"/>

            <rect x="0" y="0" width="20" height="20" fill="pink"/>
            <rect x="50" y="0" width="20" height="20" fill="pink"/>
            <rect x="100" y="0" width="20" height="20" fill="pink"/>
            <rect x="150" y="0" width="20" height="20" fill="pink"/>
            <rect x="200" y="0" width="20" height="20" fill="pink"/>

            <rect x="25" y="25" width="20" height="20" fill="lightgreen"/>
            <rect x="75" y="25" width="20" height="20" fill="lightgreen"/>
            <rect x="125" y="25" width="20" height="20" fill="lightgreen"/>
            <rect x="175" y="25" width="20" height="20" fill="lightgreen"/>

            <rect x="0" y="25" width="20" height="20" fill="pink"/>
            <rect x="50" y="25" width="20" height="20" fill="pink"/>
            <rect x="100" y="25" width="20" height="20" fill="pink"/>
            <rect x="150" y="25" width="20" height="20" fill="pink"/>
            <rect x="200" y="25" width="20" height="20" fill="pink"/>
          </g>
          </svg>
        </div>
        <div className="static-map__legend">
          <div>Pink is the space between plants</div>
          <div>Green is the space that contain plants in the center</div>
        </div>
      </div>
    );
  }

}
