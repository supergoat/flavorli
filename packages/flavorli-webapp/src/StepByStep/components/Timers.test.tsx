import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import {TimersProvider} from '../helpers/timersContext';
import Timers from './Timers';

const setup = () => {
  return {
    ...render(
      <TimersProvider initialValues={{timers: []}}>
        <Timers />,
      </TimersProvider>,
    ),
  };
};

describe('Timers', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });
});
