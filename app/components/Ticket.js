import React from 'react';
import { defineSvg } from '../defineSvg';

module.exports = defineSvg('Ticket', {
  className: 'tilt-icon-ticket',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames() } viewBox="0 0 46 46">
        <title>Ticket</title>
        <g className="tilt-icon-main">
          <g fill="none">
            <g transform="translate(-577.000000, -67.000000)" fill="#FFFFFF">
              <path d="M625,85 C625,88.525 627.609,91.434 631,91.921 L631,101 L579,101 L579,91.921 C582.391,91.434 585,88.525 585,85 C585,81.475 582.391,78.566 579,78.08 L579,69 L631,69 L631,78.08 C627.609,78.566 625,81.475 625,85 L625,85 Z M632,80 C632.553,80 633,79.553 633,79 L633,68 C633,67.447 632.553,67 632,67 L578,67 C577.447,67 577,67.447 577,68 L577,79 C577,79.553 577.447,80 578,80 C580.762,80 583,82.238 583,85 C583,87.762 580.762,90 578,90 C577.447,90 577,90.447 577,91 L577,102 C577,102.553 577.447,103 578,103 L632,103 C632.553,103 633,102.553 633,102 L633,91 C633,90.447 632.553,90 632,90 C629.238,90 627,87.762 627,85 C627,82.238 629.238,80 632,80 L632,80 Z M621,93 C621,95.209 619.209,97 617,97 L613,97 L613,73 L617,73 C619.209,73 621,74.791 621,77 L621,93 Z M611,97 L593,97 C590.791,97 589,95.209 589,93 L589,77 C589,74.791 590.791,73 593,73 L611,73 L611,97 Z M617,71 L593,71 C589.686,71 587,73.686 587,77 L587,93 C587,96.314 589.686,99 593,99 L617,99 C620.313,99 623,96.314 623,93 L623,77 C623,73.686 620.313,71 617,71 L617,71 Z M598,84 C598.441,84 598.805,83.709 598.936,83.313 L598.948,83.316 L600,80.162 L601.052,83.316 L601.063,83.313 C601.195,83.709 601.559,84 602,84 L605.149,84 L602.375,86.219 L602.385,86.231 C602.156,86.414 602,86.684 602,87 C602,87.111 602.03,87.213 602.063,87.313 L602.052,87.316 L602.98,90.104 L600.625,88.219 L600.615,88.231 C600.444,88.094 600.236,88 600,88 C599.764,88 599.556,88.094 599.385,88.231 L599.375,88.219 L597.019,90.104 L597.948,87.316 L597.936,87.313 C597.971,87.213 598,87.111 598,87 C598,86.684 597.844,86.414 597.615,86.231 L597.625,86.219 L594.851,84 L598,84 Z M591,83 C591,83.316 591.156,83.586 591.385,83.77 L591.375,83.781 L595.831,87.346 L594.052,92.684 L594.063,92.687 C594.03,92.787 594,92.89 594,93 C594,93.553 594.447,94 595,94 C595.238,94 595.448,93.911 595.617,93.771 L595.625,93.781 L600,90.281 L604.375,93.781 L604.385,93.77 C604.556,93.906 604.764,94 605,94 C605.553,94 606,93.553 606,93 C606,92.888 605.96,92.791 605.925,92.691 L605.948,92.684 L604.169,87.346 L608.625,83.781 L608.615,83.77 C608.844,83.586 609,83.316 609,83 C609,82.447 608.553,82 608,82 L602.721,82 L600.949,76.684 L600.936,76.687 C600.805,76.291 600.441,76 600,76 C599.559,76 599.195,76.291 599.063,76.687 L599.052,76.684 L597.279,82 L592,82 C591.447,82 591,82.447 591,83 L591,83 Z"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  },
});
