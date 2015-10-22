const React = require('react');
const FilmStrip = require('root/app/components/FilmStrip');
const {getTextContent} = require('../helpers/getTextContent');

describe('FilmStrip', function() {
  it('should render without error', function () {
    const text = getTextContent(<FilmStrip />);
    expect(text).to.equal('filmstrip');
  });
});
