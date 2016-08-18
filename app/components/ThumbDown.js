import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('ThumbDown', {
  className: 'tilt-icon-thumb-down',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 35 35">
        <title>ThumbDown</title>
        <g className="tilt-icon-main">
          <circle className="circle-backdrop" cx="17" cy="17.5" r="16"></circle>
          <g transform="rotate(180 17.5 17.5)">
            <path className="hand" d="M26.2207093,21.6220902 C26.1240838,21.1844134 25.9247725,20.8006046 25.7109842,20.60264 C26.2321563,20.0134598 26.25,19.2798462 26.25,18.8381293 C26.25,18.0166437 25.9267926,17.3631587 25.2470469,16.9763198 C25.4941659,16.0477717 25.2140528,15.3522023 24.7060111,15.0932997 C23.8801487,14.6727933 22.895376,14.8007296 21.781657,15.0539088 C20.883073,15.2582702 19.8067248,15.4700384 18.9391148,15.3252684 C18.3230006,15.222246 18.1873208,15.0660291 18.1573568,15.0037443 C18.0593846,14.7980362 18.3529647,14.2809043 18.6367812,13.7809428 C19.0953318,12.9735975 19.6656582,11.8211609 19.6656582,10.6148565 C19.6656582,8.89983695 18.6148974,7.875 17.5988139,7.875 C16.9635093,7.875 16.3221445,8.30964668 16.3221445,9.27994238 C16.3221445,10.9205569 15.5195127,11.8703154 12.8607947,14.52937 C11.7453924,15.6444357 11.2955953,16.4800617 10.9976385,17.0332177 C10.5828556,17.8035288 10.1000644,17.9886998 9.10586487,17.9903831 C9.09913138,17.9900465 9.09374459,17.986343 9.08667443,17.986343 C8.90049347,17.986343 8.75,18.1371732 8.75,18.3230175 L8.75,25.056506 C8.75,25.2373002 8.89375998,25.3827435 9.0725341,25.390487 L9.0725341,25.3992406 C11.2706814,25.3992406 12.2335703,25.5857582 13.3479626,25.9968377 C14.6364157,26.472222 16.1181198,26.7371847 19.7737307,26.7371847 C22.7883135,26.7371847 24.8504444,26.2274596 25.4567951,25.1312477 C25.8193934,24.4757426 25.3941736,24.0501861 25.3140451,23.770073 C25.9311693,22.9489241 26.3685094,22.2971224 26.2207093,21.6220902"></path>
          </g>
        </g>
      </svg>);
  },
});
