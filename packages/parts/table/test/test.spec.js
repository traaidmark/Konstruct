// PART [ STICKER > TESTS ] ####################################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.1. EXTERNAL DEPENDENCIES ..................................................

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

// 1.1. END ....................................................................

// 1.2. INTERNAL DEPENDENCIES ..................................................

import Sticker from '../src';

// 1.2. END ....................................................................

// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. TEST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

describe('Part: Sticker', () => {

  // 2.1. RENDER WITHOUT PROPS .................................................

  test('renders correctly without any props', () => {
    const tree = renderer.create(
      <Sticker />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.1. END ..................................................................

  // 2.2. RENDER WITH ALL PROPS ................................................

  test('renders correctly with all props', () => {
    const tree = renderer.create(
      <Sticker value="2300.00" prefix="usd" className="p-data--large" label="My Label" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // 2.2. END ..................................................................

});

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// END OF FILE #################################################################
