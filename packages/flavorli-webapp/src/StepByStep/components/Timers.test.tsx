import React from 'react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import {RecipeTimersProvider} from '../timersContext';
import Timers from './Timers';
import {ITimer} from '../types';
import {act} from 'react-dom/test-utils';
import {timer} from '../mockData';

const setup = (timers?: {[timerId: number]: ITimer}) => {
  const contextTimers = timers || {[timer.id]: timer};
  return {
    ...render(
      <RecipeTimersProvider initialValues={contextTimers}>
        <Timers />
      </RecipeTimersProvider>,
    ),
    timer,
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
    expect(container).toMatchSnapshot();
  });

  it('should render a placeholder if there are no timers', () => {
    const {container} = setup({});
    expect(container).toMatchSnapshot();
  });

  it('should hide the timers by default', () => {
    const {queryByLabelText, timer} = setup();

    expect(queryByLabelText(timer.name)).toBeNull();
  });

  it('should show the timers when clicking on View Timers button', () => {
    const {getByText, queryByLabelText, timer} = setup();

    const viewTimersButton = getByText(/View Timers/i);

    userEvent.click(viewTimersButton);

    expect(queryByLabelText(timer.name)).toBeDefined();
  });

  it('should hide the timers when clicking on Hide Timers button', () => {
    const {getByText, queryByLabelText, timer} = setup();

    const viewTimersButton = getByText(/View Timers/i);

    // Click View Timers to show Hide Timers Button
    act(() => {
      userEvent.click(viewTimersButton);
    });

    const hideTimers = getByText(/Hide Timers/i);

    act(() => {
      userEvent.click(hideTimers);
    });

    expect(queryByLabelText(timer.name)).toBeNull();
  });
});
