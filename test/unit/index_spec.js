import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TiltImages from '../../app/components';
import ReactDOM from 'react-dom';

describe('TiltImages', () => {
  Object.keys(TiltImages).forEach(componentName => {
    describe(componentName, () => {
      it('should render without error', () => {
        const Component = TiltImages[componentName];
        const e = TestUtils.renderIntoDocument(<div><Component /></div>);
        const text = ReactDOM.findDOMNode(e).querySelector('title').textContent;
        expect(text).to.equal(componentName);
      });
    });
  });
});
