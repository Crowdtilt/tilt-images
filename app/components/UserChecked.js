const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('UserChecked', {
  className: 'tilt-icon-user-checked',

  render() {
    return (
      <svg {...this.props} className={this.getClassNames()} viewBox="0 0 60 60">
        <title>UserChecked</title>
        <g className="tilt-icon-main">
          <path d="M32.0304257,26.1680396 L28.0089406,30.1556634 L25.5640891,27.6733861 C25.2712178,27.3760594 24.7944851,27.371604 24.4986436,27.6644752 C24.2022079,27.9564554 24.1986436,28.4334851 24.4900297,28.7299208 L27.9955743,32.2907129 L33.0914158,27.2376436 C33.3872574,26.9450693 33.3884455,26.4683366 33.0958713,26.172495 C32.8035941,25.8766535 32.3268614,25.8751683 32.0304257,26.1680396"></path>
          <path d="M28.7939604,35.7435347 C25.0549505,35.7435347 22.0133663,32.7019505 22.0133663,28.9629406 C22.0133663,25.2242277 25.0549505,22.1826436 28.7939604,22.1826436 C32.5329703,22.1826436 35.5745545,25.2242277 35.5745545,28.9629406 C35.5745545,32.7019505 32.5329703,35.7435347 28.7939604,35.7435347 M28.7939604,20.6758119 C24.2244554,20.6758119 20.5068317,24.3934356 20.5068317,28.9629406 C20.5068317,33.5327426 24.2244554,37.2503663 28.7939604,37.2503663 C33.3634653,37.2503663 37.0810891,33.5327426 37.0810891,28.9629406 C37.0810891,24.3934356 33.3634653,20.6758119 28.7939604,20.6758119"></path>
          <path d="M21.7258119,21.816198 L22.1980891,20.386 L22.117297,20.3586733 C21.107099,20.0254059 20.066604,19.6811485 18.9999703,19.2911485 L18.9999703,16.4836238 C19.7327426,15.9935248 21.0821485,14.7370891 21.2440297,12.066198 C21.797099,11.7124356 22.1443267,10.945802 22.1443267,9.9673861 C22.1443267,9.035901 21.8303663,8.2971881 21.3227426,7.9220396 C21.4424455,7.0205545 21.6257129,5.3705545 21.2226436,3.7496634 C20.7090792,1.6879802 17.7978911,0.7493663 15.3087822,0.7493663 L15.3081881,0.7493663 C12.9257129,0.7499604 11.1782871,1.5712475 10.6376931,2.9153069 C8.5997723,4.2682772 8.9211584,6.8411485 9.1243267,8.0390693 C8.927099,8.1852079 8.7577921,8.3877822 8.6276931,8.636396 C8.4304653,9.0151089 8.3214554,9.5075842 8.3214554,10.0208515 C8.3214554,10.9766931 8.6686832,11.725802 9.2220495,12.0715446 C9.3854158,14.7385743 10.7339307,15.9935248 11.4661089,16.4836238 L11.4661089,19.2920396 C10.5340297,19.6324356 9.5677921,19.9517426 8.6291782,20.2615446 C5.086505,21.4306535 2.2884851,22.3541188 1.7101683,24.0976832 C0.967297,26.3372871 0.9200693,30.2946139 0.9185842,30.4624356 C0.916505,30.6632277 0.9952178,30.8568911 1.1363069,31.0003564 C1.2782871,31.1429307 1.4710594,31.2231287 1.6721485,31.2231287 L17.4931386,31.2231287 L17.4931386,29.7165941 L2.447396,29.7165941 C2.4961089,28.4842178 2.6526436,26.0423366 3.1406634,24.5723366 C3.4804653,23.5472871 6.466802,22.5623366 9.1005644,21.6926337 C10.2197723,21.3231287 11.377,20.9405545 12.487297,20.5190693 C12.7792772,20.4079802 12.9729406,20.1275842 12.9729406,19.8151089 L12.9729406,16.0481782 C12.9729406,15.7428317 12.7887822,15.4683762 12.507198,15.3513465 C12.4887822,15.3439208 10.7125446,14.575802 10.7125446,11.5276832 C10.7125446,11.1112475 10.4389802,10.7943168 10.0234356,10.7943168 C9.9711584,10.7524356 9.8282871,10.4910495 9.8282871,10.0208515 C9.8282871,9.5509505 9.9711584,9.2895644 9.9592772,9.2675842 C10.3757129,9.2675842 10.7125446,8.9307525 10.7125446,8.5143168 C10.7125446,8.4171881 10.6875941,8.2309505 10.6436337,7.9823366 C10.3777921,6.4710495 10.287495,4.8246139 11.6339307,4.0719406 C11.8154158,3.9703564 11.9464059,3.7980792 11.997198,3.595802 C12.1959109,2.7947129 13.526901,2.256198 15.3081881,2.256198 L15.3087822,2.256198 C17.5085842,2.256198 19.5055149,3.0890693 19.7600693,4.1132277 C20.1212574,5.5668911 19.9085842,7.1405545 19.8064059,7.896198 C19.7725446,8.1418416 19.7532376,8.3191683 19.7532376,8.4067921 C19.7532376,8.6069901 19.8328416,8.7982772 19.9739307,8.9393663 C20.1028416,9.0682772 20.2727426,9.145505 20.4521485,9.1579802 C20.516901,9.2417426 20.6377921,9.5147129 20.6377921,9.9673861 C20.6377921,10.4197624 20.516901,10.6927327 20.4521485,10.776495 C20.0615545,10.8038218 19.7532376,11.1296634 19.7532376,11.5276832 C19.7532376,14.5208515 18.0236337,15.3225347 17.9588812,15.3513465 C17.677,15.4683762 17.4931386,15.7428317 17.4931386,16.0481782 L17.4931386,19.8151089 C17.4931386,20.1284752 17.687396,20.4094653 17.9808614,20.5199604 C19.247099,20.9981782 20.4661089,21.4006535 21.6450198,21.7897624 L21.7258119,21.816198 L21.7258119,21.816198 Z"></path>
        </g>
      </svg>
    );
  },
});
