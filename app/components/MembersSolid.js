import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'MembersSolid',

  render() {
    const classes = classnames('tilt-icon tilt-icon-members-solid', this.props.className);
    return <svg viewBox="0 0 18 10" className={classes}>
      <title>MembersSolid</title>
      <g>
        <path d="M14.0727814,6.24794134 C13.953538,6.41011239 13.7150512,6.41202028 13.609163,6.60090186 C13.4574854,6.87277686 13.5423867,7.2562637 13.446992,7.55007949 C13.3391959,7.88396107 13.0615972,7.90780976 13.0406104,8.3456716 C13.1770249,8.3637966 13.3134393,8.38287555 13.446992,8.40100055 C13.5834064,8.68432291 13.8333406,9.2519216 14.0870906,9.42363212 C14.298867,9.47991502 14.5115972,9.53619791 14.7252814,9.59343476 C15.4722222,9.89297423 16.3012025,10.2497505 17.0510051,10.5578755 C17.7311696,10.8383361 17.614788,10.9232374 17.8609064,11.619619 C17.8609064,12.0937308 17.8733077,12.7347834 17.8609064,13.3548492 L5.0055117,13.3548492 C4.99311038,12.7347834 5.0055117,12.0937308 5.0055117,11.619619 C5.25067617,10.9232374 5.08182749,10.8383361 5.76294591,10.5578755 C6.51084064,10.2497505 7.34077485,9.89297423 8.0867617,9.59343476 C8.29949196,9.53619791 8.51317617,9.47991502 8.72590643,9.42363212 C8.98061038,9.2519216 9.22959064,8.68432291 9.36505117,8.40100055 L9.66745249,8.32945449 C9.59876827,7.95741502 9.36218933,7.92784265 9.2648867,7.66455318 C9.22482091,7.26675712 9.18570906,6.86896107 9.14659722,6.47211897 L8.83274854,6.39961897 C8.43781433,6.15827028 8.43018275,5.17761239 8.39202485,4.76932291 C8.3748538,4.58330318 8.64005117,4.42971765 8.56755117,4.08820449 C8.13445906,2.08586897 8.75357091,0.732217651 9.73327485,0.422184756 C10.4134393,0.153171598 11.6831433,-0.345742875 12.866992,0.365901861 L13.1598538,0.632053177 L13.6349196,0.711230809 C13.8753143,0.846691335 14.026038,1.29218476 14.026038,1.29218476 C14.1519591,1.78537555 14.1634064,2.24231634 14.1519591,2.74790844 C14.1481433,2.94346765 14.0327156,3.84494791 14.0641959,4.12159265 C14.0899525,4.34958607 14.1481433,4.36771107 14.2406762,4.5556387 C14.3999854,4.8818887 14.3475183,5.33310581 14.2855117,5.6631716 C14.2521235,5.84346765 14.1805775,6.10007949 14.0727814,6.24794134" />
        <path d="M6.60420306,8.06363931 C6.48784914,8.27219823 6.55297806,8.56637607 6.47979949,8.79176605 C6.39710771,9.04789104 6.18415808,9.06618568 6.1680588,9.4020753 C6.27270415,9.41597923 6.3773495,9.43061494 6.47979949,9.44451887 C6.58444484,9.66185921 6.77617269,10.0972717 6.97082768,10.2289931 C7.1332841,10.2721685 7.2964723,10.3153438 7.46039229,10.359251 C8.03338047,10.5890317 8.66930222,10.8627195 9.24448576,11.0990863 C9.76624894,11.3142313 9.67697109,11.3793602 9.86577179,11.9135637 C9.86577179,12.2772612 9.875285,12.7690212 9.86577179,13.2446819 L0.00422809499,13.2446819 C-0.00528511873,12.7690212 0.00422809499,12.2772612 0.00422809499,11.9135637 C0.192297012,11.3793602 0.0627709486,11.3142313 0.585265917,11.0990863 C1.15898588,10.8627195 1.79563942,10.5890317 2.36789581,10.359251 C2.53108402,10.3153438 2.69500401,10.2721685 2.85819221,10.2289931 C3.05357898,10.0972717 3.24457504,9.66185921 3.34848861,9.44451887 L3.58046467,9.38963495 C3.5277761,9.10423853 3.34629325,9.08155318 3.27165111,8.87958033 C3.24091612,8.57442571 3.2109129,8.26927108 3.18090969,7.96484824 L2.94015221,7.90923253 C2.63719294,7.72409076 2.63133865,6.97181509 2.60206723,6.65861082 C2.58889508,6.51591262 2.7923315,6.39809512 2.73671579,6.13611585 C2.40448509,4.60009773 2.87941399,3.56169387 3.63095788,3.32386352 C4.15272106,3.11749996 5.12672779,2.73477606 6.03487381,3.28068817 L6.25953201,3.48485637 L6.62396127,3.54559458 C6.80837126,3.64950815 6.9239934,3.99125205 6.9239934,3.99125205 C7.0205891,4.36958525 7.02937053,4.72011058 7.0205891,5.10795699 C7.01766196,5.25797305 6.92911589,5.94951051 6.95326482,6.16172835 C6.97302304,6.33662513 7.01766196,6.35052906 7.08864517,6.49469083 C7.21085338,6.74496153 7.17060517,7.09109615 7.1230391,7.344294 C7.0974266,7.48260149 7.04254267,7.67945183 6.95985089,7.79287861 C6.86837768,7.91728218 6.68543127,7.91874575 6.60420306,8.06363931 Z" />
      </g>
    </svg>;
  },
});
