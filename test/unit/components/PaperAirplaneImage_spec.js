const React = require('react');
const PaperAirplaneImage = require('root/app/components/PaperAirplaneImage');
const {getTextContent} = require('../helpers/getTextContent');

describe('PaperAirplaneImage', function() {
  it('should render without error', function () {
    const text = getTextContent(<PaperAirplaneImage />);
    expect(text).to.equal('Airplane Icon');
  });
});
