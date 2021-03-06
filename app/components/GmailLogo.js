
import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'TwitterLogo',

  render() {
    const classes = classnames('tilt-icon tilt-icon-gmail-logo', this.props.className);

    return <svg className={classes} version="1.1" viewBox="0 0 45555 33097">
      <title>GmailLogo</title>
      <g>
        <path fill="#E75A4D" d="M41608 250c2030,0 3691,1661 3691,3691l0 1070 -5128 3663 -17458 12026 -17458 -12148 0 24295 -1314 0c-2030,0 -3691,-1661 -3691,-3691l0 -25214c0,-2030 1661,-3691 3691,-3691l18772 13918 18894 -13918z"/>
        <polygon fill="#E7E4D7" points="5255,8552 5255,32847 40172,32847 40172,8674 22713,20700 "/>
        <polygon fill="#B8B7AE" points="5255,32847 22713,20700 22634,20644 5255,32580 "/>
        <polygon fill="#B7B6AD" points="40172,8674 40182,32847 22713,20700 "/>
        <path fill="#B2392F" d="M45299 5011l6 24148c-88,2684 -1251,3642 -5123,3687l-10 -24173 5128 -3663z"/>
        <polygon fill="#F7F5ED" points="3941,250 22713,14168 41608,250 "/>
      </g>
    </svg>;
  },
});
