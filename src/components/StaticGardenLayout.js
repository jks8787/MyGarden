import Component from 'react-pure-render/component';
import React from 'react';

export default class StaticGardenLayout extends Component {

  render() {
    return (
      <div className="static-garden-layout">
        {/* this an example the static map */}
        <h2> Static Plant Map </h2>
        <div className="static-garden-layout__svg-wrap">
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
        <div className="static-garden-layout__legend">
          <div>Pink is the space between plants</div>
          <div>Green is the space that contain plants in the center</div>
        </div>
      </div>
    );
  }

};
