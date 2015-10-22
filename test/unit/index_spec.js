const TiltImages = require('../../app/components');
const React = require('react');
const {getTextContent} = require('../helpers/getTextContent');

describe('TiltImages', function() {
  Object.keys(TiltImages).forEach(function(ComponentName) {
    describe(ComponentName, function() {
      it('should render without error', function () {
        const text = getTextContent(<ComponentName />);
        expect(text).to.equal(ComponentName);
      });
    });
  });
});
