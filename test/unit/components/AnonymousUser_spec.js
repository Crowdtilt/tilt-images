const React = require('react');
const AnonymousUser = require('root/app/components/AnonymousUser');
const {getTextContent} = require('../helpers/getTextContent');

describe('AnonymousUser', function() {
  it('should render without error', function () {
    const text = getTextContent(<AnonymousUser />);
    expect(text).to.equal('AnonymousUser');
  });
});
