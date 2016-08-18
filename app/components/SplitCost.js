import React from 'react';
import classnames from 'classnames';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('SplitCost', {
  className: 'tilt-icon-split-cost',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames()} viewBox="0 0 23 25">
          <title>SplitCost</title>
          <g className="tilt-icon-main">
            <path className="outline" d="M3.66666667,15.8888889 L3.66666667,0 L22,0 L22,19.5555556 C22,20.9 20.9,22 19.5555556,22"></path>
            <path className="bottom-fold" d="M19.5555556,20.7777778 C18.8222222,20.7777778 18.3333333,20.2888889 18.3333333,19.5555556 L18.3333333,17.1111111 L0,17.1111111 L0,20.7777778 C0,22.1222222 1.1,23.2222222 2.44444444,23.2222222 L19.5555556,23.2222222 L19.5555556,20.7777778 L19.5555556,20.7777778 Z"></path>
            <path className="outline" d="M11,12.2222222 L18.3333333,12.2222222"></path>
            <path className="outline" d="M7.33333333,12.2222222 L9.77777778,12.2222222"></path>
            <path className="outline" d="M11,6.11111111 L18.3333333,6.11111111"></path>
            <path className="outline" d="M7.33333333,6.11111111 L9.77777778,6.11111111"></path>
          </g>
      </svg>
    );
  },
});
