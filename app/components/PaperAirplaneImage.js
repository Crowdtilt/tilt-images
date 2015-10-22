const React = require('react');

module.exports = React.createClass({
  displayName: 'PaperAirplaneImage',

  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      width: 30,
      height: 30,
    };
  },

  render() {
    return <svg {...this.props} viewBox="0 0 29 30" {...this.props}>
      <title>PaperAirplaneImage</title>
      <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
        <path d="M17.0095,27.202 L13.089,17.6185 L27.029,3.6785 L17.0095,27.202 Z M2.798,12.9905 L26.322,2.971 L12.382,16.911 L2.798,12.9905 Z M29,1.5 C29,1.224 28.7765,1 28.5,1 C28.431,1 28.3645,1.0145 28.3045,1.04 L1.3065,12.539 C1.306,12.5395 1.3055,12.5395 1.305,12.54 L1.3045,12.54 C1.1255,12.616 1,12.7935 1,13 C1,13.209 1.129,13.387 1.3115,13.462 L1.311,13.4625 L12.117,17.883 L16.5375,28.6895 L16.5385,28.689 C16.613,28.871 16.791,29 17,29 C17.207,29 17.384,28.8745 17.46,28.6955 L17.46,28.696 L17.4605,28.695 C17.4605,28.6945 17.4605,28.694 17.461,28.694 L28.96,1.6955 L28.956,1.694 C28.9815,1.6335 29,1.5695 29,1.5 L29,1.5 Z" stroke="#4EA8DC" strokeWidth="0.1" fill="#3AA0D8" transform="translate(15.000000, 15.000000) rotate(-1.000000) translate(-15.000000, -15.000000) " />
      </g>
    </svg>;
  },
});
