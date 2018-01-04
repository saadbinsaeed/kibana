import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';

import { KuiTestingComponent } from './testing_component';

describe('KuiTestingComponent', () => {
  test('is rendered', () => {
    const component = render(
      <KuiTestingComponent {...requiredProps} />
    );

    expect(component)
      .toMatchSnapshot();
  });
});
