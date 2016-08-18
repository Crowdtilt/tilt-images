import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'AnonymousUser',

  render() {
    const classes = classnames('tilt-icon tilt-icon-anonymous-user', this.props.className);
    const path = '<path d="M44.2608696,49.5669592 C44.1678261,44.3016531 40.2052174,42.4921429 37.3121739,41.170551 C36.4973913,40.7975918 35.7278261,40.4465714 35.1782609,40.0771224 C34.6713043,39.7357551 34.1965217,39.4593265 33.7591304,39.2039592 C32.013913,38.186 31.2173913,37.7217755 31.2173913,34.6643878 C31.2173913,30.8347551 34.3252174,28.3635714 34.3547826,28.3407551 L34.5173913,28.2143878 L34.6078261,28.0292245 C35.6495652,25.8783469 35.14,24.0653265 34.7930435,23.2483265 C37.0582609,18.1804694 34.3165217,13.9875306 33.7347826,13.1863265 C32.2608696,8.90387755 29.1147826,8 26.7234783,8 C23.8886957,8 21.3695652,9.25489796 21.3295652,9.27771429 C18.7069565,10.3369184 16.9173913,12.0270816 16.0130435,14.3008163 C14.5521739,17.9716122 15.8773913,22.0048367 16.3573913,23.2430612 C15.1808696,26.1117755 16.5373913,28.0704694 16.5982609,28.1564694 L16.7808696,28.3442653 C16.8121739,28.3679592 19.9130435,30.7873673 19.9130435,34.6643878 C19.9130435,38.4194286 17.873913,39.1056735 15.2904348,39.9753265 L14.9521739,40.0867755 C12.046087,41.0520816 6,43.0590408 6,49.5827551 L6,50.4603061 L44.2765217,50.4603061 L44.2608696,49.5669592" fill="#D9D9D9" mask="url(#mask-2)"></path>';

    return <svg className={classes} viewBox="0 0 50 50">
      <title>AnonymousUser</title>
      <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
        <mask id="mask-2" fill="white">
          <circle cx="25" cy="25" r="25" />
        </mask>
        <circle cx="25" cy="25" r="25" fill="#EDEDED" />
        <g dangerouslySetInnerHTML={{__html: path}} />
      </g>
    </svg>;
  },
});
