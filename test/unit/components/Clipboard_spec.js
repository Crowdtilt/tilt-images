const React = require('react/addons')
const Clipboard = require('root/app/components/Clipboard');
const {getTextContent} = require('../helpers/getTextContent');

describe('Clipboard', function() {
  it('should render without error', function () {
    const text = getTextContent(<Clipboard />);
    expect(text).to.equal('Clipboard');
  });
});
