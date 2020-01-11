import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import RunTimers from './RunTimers';
import * as TimersContext from '../timersContext';

afterEach(() => {
  jest.restoreAllMocks();
});

const setup = () => {
  const timer = {
    id: 1,
    name: 'Thicken Sauce',
    minutes: 1,
    seconds: 0,
    isPaused: true,
  };

  const timers = {[timer.id]: timer};
  return render(
    <TimersContext.TimersProvider initialValues={{...timers}}>
      <RunTimers />
    </TimersContext.TimersProvider>,
  );
};
describe('RunTimers', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should call useTimersContext', () => {
    jest.spyOn(TimersContext, 'useTimersContext');
    setup();
    expect(TimersContext.useTimersContext).toHaveBeenCalled();
  });

  it('should call useRunTimer', () => {
    jest.spyOn(TimersContext, 'useRunTimer');
    setup();
    expect(TimersContext.useRunTimer).toHaveBeenCalled();
  });
});
