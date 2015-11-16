const React = require('react');
const { defineSvg } = require('../defineSvg');

module.exports = defineSvg('Free', {
  className: 'tilt-icon-tag-free',

  render() {
    return (
      <svg className={this.getClassNames()} viewBox="0 0 64 64">
        <title>Free</title>
        <g className="tilt-icon-main">
          <g className="tilt-icon-main-inner">
            <path d="M47.8873846,1.41292308 C56.0311385,1.41292308 62.6566154,8.0384 62.6566154,16.1821538 L62.6566154,47.6898462 C62.6566154,55.8336 56.0311385,62.4590769 47.8873846,62.4590769 L16.3796923,62.4590769 C8.23593846,62.4590769 1.61046154,55.8336 1.61046154,47.6898462 L1.61046154,16.1821538 C1.61046154,8.0384 8.23593846,1.41292308 16.3796923,1.41292308 L47.8873846,1.41292308 M47.8873846,0.428307692 L16.3796923,0.428307692 C7.67963077,0.428307692 0.625846154,7.48110769 0.625846154,16.1821538 L0.625846154,47.6898462 C0.625846154,56.3899077 7.67963077,63.4436923 16.3796923,63.4436923 L47.8873846,63.4436923 C56.5884308,63.4436923 63.6412308,56.3899077 63.6412308,47.6898462 L63.6412308,16.1821538 C63.6412308,7.48110769 56.5884308,0.428307692 47.8873846,0.428307692"></path>
              <path d="M8.308,22.008 L8.308,42 L10.212,42 L10.212,32.48 L19.788,32.48 L19.788,30.856 L10.212,30.856 L10.212,23.632 L20.992,23.632 L20.992,22.008 L8.308,22.008 Z M23.008,27.552 L23.008,42 L24.772,42 L24.772,34.3 C24.772,33.5346628 24.9026654,32.8300032 25.164,32.186 C25.4253346,31.5419968 25.7939976,30.986669 26.27,30.52 C26.7460024,30.053331 27.3106634,29.6940013 27.964,29.442 C28.6173366,29.1899987 29.3453293,29.0826665 30.148,29.12 L30.148,27.356 C28.8413268,27.2999997 27.7166714,27.5893302 26.774,28.224 C25.8313286,28.8586698 25.1360022,29.7639941 24.688,30.94 L24.632,30.94 L24.632,27.552 L23.008,27.552 Z M41.712,33.768 L32.36,33.768 C32.434667,33.1146634 32.5886655,32.4753365 32.822,31.85 C33.0553345,31.2246635 33.367998,30.6740024 33.76,30.198 C34.152002,29.7219976 34.6279972,29.3393348 35.188,29.05 C35.7480028,28.7606652 36.3919964,28.616 37.12,28.616 C37.8293369,28.616 38.4639972,28.7606652 39.024,29.05 C39.5840028,29.3393348 40.059998,29.7219976 40.452,30.198 C40.844002,30.6740024 41.1473323,31.2199969 41.362,31.836 C41.5766677,32.4520031 41.6933332,33.0959966 41.712,33.768 L41.712,33.768 Z M32.36,35.252 L43.476,35.252 C43.5133335,34.243995 43.4200011,33.2500049 43.196,32.27 C42.9719989,31.2899951 42.6033359,30.4220038 42.09,29.666 C41.5766641,28.9099962 40.9093374,28.298669 40.088,27.832 C39.2666626,27.365331 38.2773391,27.132 37.12,27.132 C35.9813276,27.132 34.9966708,27.3513311 34.166,27.79 C33.3353292,28.2286689 32.6586693,28.8073297 32.136,29.526 C31.6133307,30.2446703 31.2260013,31.0613288 30.974,31.976 C30.7219987,32.8906712 30.596,33.8239952 30.596,34.776 C30.596,35.8026718 30.7219987,36.7779954 30.974,37.702 C31.2260013,38.6260046 31.6133307,39.4379965 32.136,40.138 C32.6586693,40.8380035 33.3353292,41.3886647 34.166,41.79 C34.9966708,42.1913353 35.9813276,42.392 37.12,42.392 C38.9493425,42.392 40.3633283,41.9440045 41.362,41.048 C42.3606717,40.1519955 43.0466648,38.8826749 43.42,37.24 L41.656,37.24 C41.3759986,38.3600056 40.8720036,39.2559966 40.144,39.928 C39.4159964,40.6000034 38.4080064,40.936 37.12,40.936 C36.2799958,40.936 35.5613363,40.7586684 34.964,40.404 C34.3666637,40.0493316 33.872002,39.601336 33.48,39.06 C33.087998,38.518664 32.8033342,37.9073367 32.626,37.226 C32.4486658,36.5446633 32.36,35.8866698 32.36,35.252 L32.36,35.252 Z M56.244,33.768 L46.892,33.768 C46.966667,33.1146634 47.1206655,32.4753365 47.354,31.85 C47.5873345,31.2246635 47.899998,30.6740024 48.292,30.198 C48.684002,29.7219976 49.1599972,29.3393348 49.72,29.05 C50.2800028,28.7606652 50.9239964,28.616 51.652,28.616 C52.3613369,28.616 52.9959972,28.7606652 53.556,29.05 C54.1160028,29.3393348 54.591998,29.7219976 54.984,30.198 C55.376002,30.6740024 55.6793323,31.2199969 55.894,31.836 C56.1086677,32.4520031 56.2253332,33.0959966 56.244,33.768 L56.244,33.768 Z M46.892,35.252 L58.008,35.252 C58.0453335,34.243995 57.9520011,33.2500049 57.728,32.27 C57.5039989,31.2899951 57.1353359,30.4220038 56.622,29.666 C56.1086641,28.9099962 55.4413374,28.298669 54.62,27.832 C53.7986626,27.365331 52.8093391,27.132 51.652,27.132 C50.5133276,27.132 49.5286708,27.3513311 48.698,27.79 C47.8673292,28.2286689 47.1906693,28.8073297 46.668,29.526 C46.1453307,30.2446703 45.7580013,31.0613288 45.506,31.976 C45.2539987,32.8906712 45.128,33.8239952 45.128,34.776 C45.128,35.8026718 45.2539987,36.7779954 45.506,37.702 C45.7580013,38.6260046 46.1453307,39.4379965 46.668,40.138 C47.1906693,40.8380035 47.8673292,41.3886647 48.698,41.79 C49.5286708,42.1913353 50.5133276,42.392 51.652,42.392 C53.4813425,42.392 54.8953283,41.9440045 55.894,41.048 C56.8926717,40.1519955 57.5786648,38.8826749 57.952,37.24 L56.188,37.24 C55.9079986,38.3600056 55.4040036,39.2559966 54.676,39.928 C53.9479964,40.6000034 52.9400064,40.936 51.652,40.936 C50.8119958,40.936 50.0933363,40.7586684 49.496,40.404 C48.8986637,40.0493316 48.404002,39.601336 48.012,39.06 C47.619998,38.518664 47.3353342,37.9073367 47.158,37.226 C46.9806658,36.5446633 46.892,35.8866698 46.892,35.252 L46.892,35.252 Z"></path>
          </g>
        </g>
      </svg>);
  },
});